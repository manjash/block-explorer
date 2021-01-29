import React from 'react'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { networkIdentifier } from '../../config'
import searchStyle from '../../assets/jss/containers/searchStyle'
import { ApiUrls } from '../../services/servicesUrls'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { getBlockDetailPageUrl } from '../../utils/routes'

const useStyles = makeStyles(searchStyle)

const Search = () => {
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [results, setResults] = React.useState([] as Block[])
  const classes = useStyles()
  const { t } = useTranslation()
  const history = useHistory()

  const navigate = (block: Block | null) => {
    if (!block) return

    history.push(getBlockDetailPageUrl(block.block_identifier.index), { update: true })
  }

  const onChangeHandle = async (value: string) => {
    if (value.length < 4) {
      setOpen(false)
      return
    }

    setLoading(true)

    axios
      .post(ApiUrls.SEARCH_BLOCKS, {
        network_identifier: networkIdentifier,
        limit: 8,
        query: value.toUpperCase(),
      })
      .then((response) => {
        const blocks = formatBlocksFromJson(response.data)
        setResults(blocks)
        if (blocks.length > 0) {
          setOpen(true)
        }
        setLoading(false)
      })
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>

      <Autocomplete
        id='asynchronous-demo'
        open={open}
        onChange={(event, value) => navigate(value)}
        popupIcon={null}
        classes={{
          root: classes.inputRoot,
        }}
        onClose={() => {
          setOpen(false)
        }}
        getOptionSelected={(option, value) =>
          option.block_identifier.index === value.block_identifier.index
        }
        getOptionLabel={(option) =>
          `${option.block_identifier.index} - ${option.block_identifier.hash}`
        }
        options={results}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={t('app.header.search.placeholder')}
            classes={{
              root: classes.inputInput,
            }}
            onChange={(ev) => onChangeHandle(ev.target.value)}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color='inherit' size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  )
}

export default Search
