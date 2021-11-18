import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import searchIcon from '../../assets/images/search.svg'
import searchStyle from '../../assets/jss/containers/searchStyle'
import { ApiUrls, getApiUrl } from '../../services/servicesUrls'
import Block, { isBlock, formatBlocksFromJson } from '../../types/Block'
import { getBlockDetailPageUrl, getTransactionDetailPageUrl } from '../../utils/routes'
import { getDisplayShortHash } from '../../utils/string'
import Transaction, { isTransaction, formatTransactionsFromJson } from '../../types/Transaction'
import classNames from 'classnames'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(searchStyle)

const Search = () => {
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState([] as (Block | Transaction)[])
  const classes = useStyles()
  const { t } = useTranslation()
  const history = useHistory()

  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))

  const onChangeHandle = async (value: string) => {
    if (value.length < 4) {
      setOpen(false)
      return
    }

    setLoading(true)

    const blockSearchParams = new URLSearchParams({
      main: 'true',
      search: value,
      with_transactions: 'true',
    })
    const transactionSearchParams = new URLSearchParams({
      search: value,
      with_blocks: 'true',
    })

    const blocks = axios.get(getApiUrl(ApiUrls.SEARCH_BLOCKS) + blockSearchParams.toString())
    const transactions = axios.get(
      getApiUrl(ApiUrls.SEARCH_TRANSACTIONS) + transactionSearchParams.toString(),
    )

    Promise.all([transactions, blocks]).then((values) => {
      let transactions: Transaction[] = []
      let blocks: Block[] = []

      for (let i = 0; i < values.length; i++) {
        const { data } = values[i].data
        const first = data[0]
        if (first) {
          if (first.object === 'transaction') {
            transactions = formatTransactionsFromJson(data)
          } else if (first.object === 'block') {
            blocks = formatBlocksFromJson({ data })
          }
        }
      }

      if (transactions.length === 0 && blocks.length === 0) {
        setLoading(false)
        setOpen(true)
      } else {
        setOpen(true)
        setResult([...blocks, ...transactions])
        setLoading(false)
      }
    })
  }

  const getOptionLabel = (option: any) => {
    const hash = option.hash.toUpperCase()
    const shortHash = isSmallBreakpoint ? getDisplayShortHash(hash) : hash
    if (isTransaction(option) && option.blocks) {
      const mainBlock = option.blocks.find(({ main }) => main)
      if (mainBlock) {
        return `${shortHash} - Block: ${mainBlock.sequence}`
      } else {
        return ``
      }
    }

    return `${option.sequence} - ${shortHash}`
  }

  const getOptionSelected = (
    option: Block | Transaction,
    value: Block | Transaction,
  ): boolean => {
    if (isBlock(option) && isBlock(value)) {
      return option.hash === value.hash
    }

    if (isTransaction(option) && isTransaction(value)) {
      return option.hash === value.hash
    }

    return false
  }

  const onChange = (event: any, value: Block | Transaction | null) => {
    if (!value) {
      return
    }

    if (isBlock(value)) {
      history.push(getBlockDetailPageUrl(value.hash), { update: true })
    }

    if (isTransaction(value) && value.blocks) {
      const mainBlock = value.blocks.find((block) => block.main === true)
      if (mainBlock) {
        history.push(getTransactionDetailPageUrl(mainBlock.hash, value.hash), {
          update: true,
        })
      }
    }
  }

  const groupBy = (value: Block | Transaction | null) => {
    if (!value) {
      return ''
    }

    if (isBlock(value)) {
      return 'Blocks'
    }

    return 'Transactions'
  }

  const renderGroup = (params: AutocompleteRenderGroupParams) => {
    return (
      <li
        className={classNames(classes.group, {
          [classes.blocks]: params.group.toLowerCase() === 'blocks',
          [classes.transactions]: params.group.toLowerCase() === 'transactions',
        })}
      >
        <Typography variant='subtitle2' className={classes.groupHeader}>
          {params.group}
        </Typography>
        <ul>{params.children}</ul>
      </li>
    )
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <img src={searchIcon} role='presentation' alt='' />
      </div>

      <Autocomplete
        id='asynchronous-demo'
        autoHighlight={true}
        clearOnEscape={true}
        handleHomeEndKeys={true}
        selectOnFocus={true}
        open={open}
        onChange={onChange}
        forcePopupIcon={false}
        popupIcon={null}
        classes={{
          root: classes.inputRoot,
          focused: classes.inputRootFocused,
          paper: classes.popup,
          listbox: classes.list,
        }}
        onClose={() => {
          setOpen(false)
        }}
        getOptionSelected={getOptionSelected}
        getOptionLabel={getOptionLabel}
        renderGroup={renderGroup}
        groupBy={groupBy}
        options={result}
        noOptionsText={'No matches'}
        loading={loading}
        loadingText={'Loading...'}
        renderInput={(params) => (
          <TextField
            {...params}
            color='secondary'
            placeholder={t('app.header.search.placeholder')}
            classes={{
              root: classes.inputInput,
            }}
            onChange={(ev) => onChangeHandle(ev.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: null,
              disableUnderline: true,
            }}
          />
        )}
      />
    </div>
  )
}

export default Search
