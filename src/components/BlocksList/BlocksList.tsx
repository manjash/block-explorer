import React from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

import { useTheme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Block from '../../types/Block'
import { getBlockDetailPageUrl } from '../../utils/routes'
import { StyledTableCell, StyledTableRow } from '../Table/Table'
import { getDisplayTimestamp } from '../../utils/time'
import { getDisplaySizeInBytes } from '../../utils/size'
import blockRow from '../../assets/images/blockRow.svg'
import blocksList from '../../assets/jss/components/BlocksList/blocksList'
import BlocksListSmall from './BlocksListSmall'
import { getDisplayShortHash } from '../../utils/string'

interface Prop {
  blockList: Block[]
}
const useStyles = makeStyles(blocksList)

const BlocksList = ({ blockList }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()
  const history = useHistory()

  const theme = useTheme()
  const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'))
  if (isSmallBreakpoint) return <BlocksListSmall blockList={blockList} />

  return (
    <TableContainer>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('app.components.blockslist.height')}</StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.size')}
            </StyledTableCell>
            <StyledTableCell className={classes.transactionsCell} align='right'>
              {t('app.components.blockslist.transactions')}
            </StyledTableCell>
            <StyledTableCell align='left'>
              {t('app.components.blockslist.hash')}
            </StyledTableCell>
            <StyledTableCell align='left'>
              {t('app.components.blockslist.timestamp')}
            </StyledTableCell>
            <StyledTableCell align='left'>
              {t('app.components.blockslist.graffiti')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blockList.map((block: Block) => (
            <StyledTableRow
              className={classes.row}
              onClick={() => history.push(getBlockDetailPageUrl(block.hash))}
              key={String(block.hash)}
            >
              <StyledTableCell scope='row'>
                <span className={classes.root}>
                  <img src={blockRow} role='presentation' alt='' />
                  {block.sequence}
                </span>
              </StyledTableCell>
              <StyledTableCell align='right'>
                {getDisplaySizeInBytes(block.size)}
              </StyledTableCell>
              <StyledTableCell align='right'>{block.transactionsCount}</StyledTableCell>
              <StyledTableCell align='left'>
                {getDisplayShortHash(block.hash.toUpperCase(), 16)}
              </StyledTableCell>
              <StyledTableCell align='left'>
                {getDisplayTimestamp(block.timestamp)}
              </StyledTableCell>
              <StyledTableCell align='left'>{block.graffiti}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default React.memo(BlocksList)
