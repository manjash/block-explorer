import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Container from '../../components/Container/Container'

import footerStyle from '../../assets/jss/components/Footer/footerStyle'

import logo from '../../assets/images/logo.svg'
import telegram from '../../assets/images/footer/telegram.svg'
import twitter from '../../assets/images/footer/twitter.svg'
import github from '../../assets/images/footer/github.svg'
import discord from '../../assets/images/footer/discord.svg'
import reddit from '../../assets/images/footer/reddit.svg'

const useStyles = makeStyles(footerStyle)

interface link {
  link: string
  name: string
}

interface Props {
  title: string
  links: Array<link>
  classes: Record<string, string>
}

const LinksBlock = ({ title, links, classes }: Props) => {
  return (
    <div className={classes.linksBlock}>
      <p>{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.link}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.container}>
          <div className={classes.about}>
            <a href='https://www.ironfish.network'>
              <img src={logo} alt={t('app.header.logo.alt')} />
            </a>
            <p>{t('app.footer.slogan')}</p>
          </div>

          <LinksBlock
            classes={classes}
            title={t('app.footer.company')}
            links={[
              { link: 'https://ironfish.network/about/', name: t('app.footer.aboutUs') },
              { link: 'https://ironfish.network/careers/', name: t('app.footer.careers') },
              // { link: 'https://ironfish.network/blog/', name: t('app.footer.blog') },
            ]}
          />
          <LinksBlock
            classes={classes}
            title={t('app.footer.product')}
            links={[
              {
                link: 'https://explorer.ironfish.network/',
                name: t('app.footer.blockExplorer'),
              },
              {
                link: 'https://ironfish.network/docs/whitepaper/1_introduction',
                name: t('app.footer.whitePaper'),
              },
              {
                link: 'https://ironfish.network/faq/',
                name: t('app.footer.faq'),
              },
            ]}
          />
          <Button
            href='mailto:contact@ironfish.network'
            variant='outlined'
            className={classes.button}
          >
            {t('app.footer.contact')}
          </Button>
        </div>
        <div className={classes.contact}>
          <p>{t('app.footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className={classes.links}>
            <a href='https://t.me/ironfishcrypto'>
              <img src={telegram} alt={t('app.footer.telegram')} />
            </a>
            <a href='https://github.com/iron-fish'>
              <img src={github} alt={t('app.footer.github')} />
            </a>
            <a href='http://reddit.com/r/ironfish'>
              <img src={reddit} alt={t('app.footer.reddit')} />
            </a>
            <a href='https://twitter.com/ironfishcrypto'>
              <img src={twitter} alt={t('app.footer.twitter')} />
            </a>
            <a href='https://discord.gg/EkQkEcm8DH'>
              <img src={discord} alt={t('app.footer.discord')} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
