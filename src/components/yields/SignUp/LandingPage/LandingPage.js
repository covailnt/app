import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Heading, Logo, Button, Flexbox } from 'components/elements'
import connections from 'images/signup/avatarConnections.png'
import lady from 'images/signup/ladyAvatar.png'
import rankEarned from 'images/signup/rankEarned.png'
import rankPotential from 'images/signup/rankPotential.png'
import profile from 'images/signup/profile.png'
import theme from 'theme'
import classes from './LandingPage.scss'

export default class LandingPage extends Component {
  render() {
    return (
      <div className={classes.landingPageCtn}>
        <div className={classes.headerCtn}>
          <div className={classes.headerContentCtn}>
            <Logo />
          </div>
        </div>

        <main>
          <div>
            <Flexbox
              flexWrap="wrap"
              justify="center"
              align="center"
              className={`${classes.introCtn} ${classes.layerCtn}`}
            >
              <div className={classes.leftCtn}>
                <Heading level={2}>
                  What if you could spend less time resourcing, and more time
                  collaborating?
                </Heading>
                <Heading level={3}>
                  Covailnt let’s you see your fellow freelancers bandwidth in
                  real time, so you always know who’s free.
                </Heading>
                <Link to="/signup/create-account">
                  <Button>
                    I&apos;m in! Let&apos;s setup my free profile.
                  </Button>
                </Link>
              </div>
              <div className={classes.rightCtn}>
                <img
                  src={connections}
                  alt="users with donut charts"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </Flexbox>
          </div>

          <div className={classes.middleCtn}>
            <Flexbox
              flexWrap="wrap"
              justify="center"
              align="center"
              className={`${classes.aboutCtn} ${classes.layerCtn}`}
            >
              <Heading level={1}>What is Covailnt about?</Heading>

              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="clock-o" color="primary" />
                  <Heading level={2}>Real-time availability</Heading>
                  <Heading level={5}>
                    Work needs to be done. Determine a connection&apos;;s
                    bandwidth with a glance of a profile photo. Gone are the
                    back and forth emails that start with "Hey, you busy?"
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img src={lady} alt="avatar" />
              </div>
            </Flexbox>
          </div>

          <div className={classes.middleCtn}>
            <Flexbox
              flexWrap="wrap"
              justify="center"
              align="center"
              className={classes.layerCtn}
            >
              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="star" color="primary" />
                  <Heading level={2}>Real-time availability</Heading>
                  <Heading level={5}>
                    It takes two to tango, right? Review shouldn&apos;t favor
                    one side over the other. We&apos;re in this together, and
                    Covailnt Rank rewards that balance.
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img src={rankEarned} alt="rank earned" />
              </div>
            </Flexbox>
          </div>

          <div className={classes.middleCtn}>
            <Flexbox
              flexWrap="wrap"
              justify="center"
              align="center"
              className={classes.layerCtn}
            >
              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="bolt" color="primary" />
                  <Heading level={2}>Showcased Potential</Heading>
                  <Heading level={5}>
                    Noobs are people too. It takes a leap of faith to trust
                    someone with limited experience. Covailnt can show you
                    who&apos;s a good bet.
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img src={rankPotential} alt="rank potential" />
              </div>
            </Flexbox>
          </div>

          <div className={classes.imageCtn}>
            <img src={profile} alt="profile" />
          </div>

          <div className={classes.bottomCtn}>
            <Flexbox
              flexWrap="wrap"
              justify="flex-start"
              align="center"
              className={classes.layerCtn}
            >
              <p className={classes.bottomText}>
                Covailnt{' '}
                <strong>
                  connects you to the freelancers you already know,{' '}
                </strong>in an environment that rewards your relationships,
                collaboration and transparency
              </p>
              <Link to="/signup/create-account">
                <Button background="white" color="primary">
                  I&apos;m in! Let&apos;s setup my profile
                </Button>
              </Link>
            </Flexbox>
          </div>
        </main>
      </div>
    )
  }
}
