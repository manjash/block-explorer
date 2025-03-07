/* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useEffect } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

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
import { debounce } from '../../utils/debounce'

const useStyles = makeStyles(searchStyle)

const Search = () => {
  const [$loading, $setLoading] = React.useState(false)
  const [$open, $setOpen] = React.useState(false)
  // const [$allResults, $setAllResults] = React.useState({})
  const [$result, $setResult] = React.useState([] as (Block | Transaction)[])
  const classes = useStyles()
  const { t } = useTranslation()
  const $history = useHistory()
  const $theme = useTheme()
  const $isSmallBreakpoint = useMediaQuery($theme.breakpoints.down('sm'))
  const getOptionLabel = (option: any) => {
    const hash = option.hash.toUpperCase()
    const shortHash = $isSmallBreakpoint ? getDisplayShortHash(hash) : hash
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
    if (
      (isBlock(option) && isBlock(value)) ||
      (isTransaction(option) && isTransaction(value))
    ) {
      return option.hash === value.hash
    }
    return false
  }

  const onChangeHandle = React.useCallback(
    async (value: string) => {
      if (value.length == 0) {
        $setOpen(false)
        return
      }

      $setOpen(false)
      $setLoading(true)

      const blockSearchParams = new URLSearchParams({
        main: 'true',
        search: value,
        with_transactions: 'true',
      })
      const transactionSearchParams = new URLSearchParams({
        search: value,
        with_blocks: 'true',
      })

      const processAll = (raw: AxiosResponse[]) => {
        const [{ data: rawTransactions }, { data: rawBlocks }] = raw
        const transactions = formatTransactionsFromJson(rawTransactions.data)
        const blocks = formatBlocksFromJson(rawBlocks.data)
        const results = [...blocks, ...transactions]
        if (results.length === 0) {
          $setLoading(false)
          $setOpen(true)
          $setResult([])
        } else {
          $setOpen(true)
          $setResult(results)
          $setLoading(false)
        }
      }

      const __blocks = axios.get(
        getApiUrl(ApiUrls.SEARCH_BLOCKS) + blockSearchParams.toString(),
      )
      const __transactions = axios.get(
        getApiUrl(ApiUrls.SEARCH_TRANSACTIONS) + transactionSearchParams.toString(),
      )
      Promise.all([__transactions, __blocks]).then(processAll)
    },
    [$setOpen, $setLoading],
  )

  const search = debounce(onChangeHandle, 250)
  // const search = onChangeHandle

  const onChange = (event: unknown, value: Block | Transaction | null) => {
    if (!value) {
      return
    }

    if (isBlock(value)) {
      $history.push(getBlockDetailPageUrl(value.hash), { update: true })
    }

    if (isTransaction(value) && value.blocks) {
      const mainBlock = value.blocks.find((block) => block.main === true)
      if (mainBlock) {
        $history.push(getTransactionDetailPageUrl(mainBlock.hash, value.hash), {
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
        filterOptions={(x) => x}
        selectOnFocus={true}
        open={$open}
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
          $setOpen(false)
        }}
        getOptionSelected={getOptionSelected}
        getOptionLabel={getOptionLabel}
        renderGroup={renderGroup}
        groupBy={groupBy}
        options={$result}
        noOptionsText={'No matches'}
        loading={$loading}
        loadingText={'Loading...'}
        renderInput={(params: any) => {
          return (
            <TextField
              {...params}
              color='secondary'
              placeholder={t('app.header.search.placeholder')}
              classes={{
                root: classes.inputInput,
              }}
              onChange={(ev) => search(ev.target.value)}
              InputProps={{
                ...params.InputProps,
                endAdornment: null,
                disableUnderline: true,
              }}
            />
          )
        }}
      />
    </div>
  )
}

export default Search
