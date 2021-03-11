import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete, { AutocompleteRenderGroupParams } from '@material-ui/lab/Autocomplete'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import searchIcon from '../../assets/images/search.svg'
import { networkIdentifier } from '../../config'
import searchStyle from '../../assets/jss/containers/searchStyle'
import { ApiUrls } from '../../services/servicesUrls'
import Block, { isBlock, formatBlocksFromJson } from '../../types/Block'
import { getBlockDetailPageUrl, getTransactionDetailPageUrl } from '../../utils/routes'
import { getDisplayShortHash } from '../../utils/string'
import Transaction, {
  isTransaction,
  formatSearchTransactionsFromJson,
} from '../../types/Transaction'
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

    const blocks = axios.post(ApiUrls.SEARCH_BLOCKS, {
      network_identifier: networkIdentifier,
      limit: 8,
      query: value.toUpperCase(),
    })

    const transactions = axios.post(ApiUrls.SEARCH_TRANSACTIONS, {
      network_identifier: networkIdentifier,
      limit: 5,
      transaction_identifier: { hash: value.toUpperCase() },
    })

    Promise.all([transactions, blocks]).then((values) => {
      let transactions: Transaction[] = []
      let blocks: Block[] = []

      for (let i = 0; i < values.length; i++) {
        const { data } = values[i]
        if (data && data.transactions) {
          transactions = formatSearchTransactionsFromJson(data)
        }
        if (data && data.blocks) {
          blocks = formatBlocksFromJson(data)
        }
      }

      if (transactions.length > 0 || blocks.length > 0) {
        setOpen(true)
      }

      setResult([...blocks, ...transactions])

      setLoading(false)
    })
  }

  const getOptionLabel = (option: any) => {
    if (isTransaction(option)) {
      return `${
        isSmallBreakpoint
          ? getDisplayShortHash(option.transaction_identifier.hash)
          : option.transaction_identifier.hash
      } - Block: ${option.block_identifier?.index}`
    }

    return `${option.block_identifier.index} - ${
      isSmallBreakpoint
        ? getDisplayShortHash(option.block_identifier.hash)
        : option.block_identifier.hash
    }`
  }

  const getOptionSelected = (
    option: Block | Transaction,
    value: Block | Transaction,
  ): boolean => {
    if (isBlock(option) && isBlock(value)) {
      return option.block_identifier.hash === value.block_identifier.hash
    }

    if (isTransaction(option) && isTransaction(value)) {
      return option.transaction_identifier.hash === value.transaction_identifier.hash
    }

    return false
  }

  const onChange = (event: any, value: Block | Transaction | null) => {
    if (!value) {
      return
    }

    if (isBlock(value)) {
      history.push(getBlockDetailPageUrl(value.block_identifier.index), { update: true })
    }

    if (isTransaction(value)) {
      history.push(
        getTransactionDetailPageUrl(
          value.block_identifier?.hash,
          value.transaction_identifier.hash,
        ),
        {
          update: true,
        },
      )
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
        <img src={searchIcon} role='decorative' />
      </div>

      <Autocomplete
        id='asynchronous-demo'
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
        loading={loading}
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
