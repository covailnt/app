import { Button, Heading, Icon, Logo } from 'components/elements'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flex } from 'rebass'

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
            <Flex
              align="center"
              className={`${classes.introCtn} ${classes.layerCtn}`}
              justify="center"
              wrap
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
                  src="/public/images/signup/avatarConnections.png"
                  alt="users with donut charts"
                  style={{ maxWidth: '100%' }}
                />
              </div>
            </Flex>
          </div>

          <div className={classes.middleCtn}>
            <Flex
              align="center"
              className={`${classes.aboutCtn} ${classes.layerCtn}`}
              justify="center"
              wrap
            >
              <Heading level={1}>What is Covailnt about?</Heading>

              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="clock" />
                  <Heading level={2}>Real-time availability</Heading>
                  <Heading level={5}>
                    Work needs to be done. Determine a connection&apos;;s
                    bandwidth with a glance of a profile photo. Gone are the
                    back and forth emails that start with "Hey, you busy?"
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img src="/public/images/signup/ladyAvatar.png" alt="avatar" />
              </div>
            </Flex>
          </div>

          <div className={classes.middleCtn}>
            <Flex
              align="center"
              className={classes.layerCtn}
              justify="center"
              wrap
            >
              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="star" />
                  <Heading level={2}>Real-time availability</Heading>
                  <Heading level={5}>
                    It takes two to tango, right? Review shouldn&apos;t favor
                    one side over the other. We&apos;re in this together, and
                    Covailnt Rank rewards that balance.
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img
                  src="/public/images/signup/rankEarned.png"
                  alt="rank earned"
                />
              </div>
            </Flex>
          </div>

          <div className={classes.middleCtn}>
            <Flex
              align="center"
              className={classes.layerCtn}
              justify="center"
              wrap
            >
              <div className={classes.leftCtn}>
                <div className="text-ctn">
                  <Icon name="lightning" />
                  <Heading level={2}>Showcased Potential</Heading>
                  <Heading level={5}>
                    Noobs are people too. It takes a leap of faith to trust
                    someone with limited experience. Covailnt can show you
                    who&apos;s a good bet.
                  </Heading>
                </div>
              </div>
              <div className={classes.rightCtn}>
                <img
                  src="/public/images/signup/rankPotential.png"
                  alt="rank potential"
                />
              </div>
            </Flex>
          </div>

          <div className={classes.imageCtn}>
            <img src="/public/images/signup/profile.png" alt="profile" />
          </div>

          <div className={classes.bottomCtn}>
            <Flex
              align="center"
              className={classes.layerCtn}
              justify="flex-start"
              wrap
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
            </Flex>
          </div>
        </main>
      </div>
    )
  }
}
