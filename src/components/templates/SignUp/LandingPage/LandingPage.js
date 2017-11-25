import { Box, Button, Flex, Heading, Icon, Logo } from 'components/elements'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return (
      <Flex direction="column">
        <Logo />

        <main>
          <Flex align="center" justify="center" py={3} wrap>
            <Box width={1 / 2}>
              <Heading level={2}>
                What if you could spend less time resourcing, and more time
                collaborating?
              </Heading>
              <Heading level={3}>
                Covailnt let’s you see your fellow freelancers bandwidth in real
                time, so you always know who’s free.
              </Heading>
              <Link to="/signup/create-account">
                <Button>I&apos;m in! Let&apos;s setup my free profile.</Button>
              </Link>
            </Box>
            <Box width={1 / 2}>
              <img
                src="/public/images/signup/avatarConnections.png"
                alt="users with donut charts"
                style={{ maxWidth: '100%' }}
              />
            </Box>
          </Flex>

          <Box bg="gray1">
            <Flex align="center" justify="center" wrap>
              <Heading level={1}>What is Covailnt about?</Heading>

              <div className="text-ctn">
                <Icon name="clock" />
                <Heading level={2}>Real-time availability</Heading>
                <Heading level={5}>
                  Work needs to be done. Determine a connection&apos;;s
                  bandwidth with a glance of a profile photo. Gone are the back
                  and forth emails that start with "Hey, you busy?"
                </Heading>
              </div>

              <img src="/public/images/signup/ladyAvatar.png" alt="avatar" />
            </Flex>
          </Box>

          <Box bg="gray2">
            <Flex align="center" justify="center" wrap>
              <Box width={1 / 2}>
                <div className="text-ctn">
                  <Icon name="star" />
                  <Heading level={2}>Real-time availability</Heading>
                  <Heading level={5}>
                    It takes two to tango, right? Review shouldn&apos;t favor
                    one side over the other. We&apos;re in this together, and
                    Covailnt Rank rewards that balance.
                  </Heading>
                </div>
              </Box>
              <Box width={1 / 2}>
                <img
                  src="/public/images/signup/rankEarned.png"
                  alt="rank earned"
                />
              </Box>
            </Flex>
          </Box>

          <Box>
            <Flex align="center" justify="center" wrap>
              <Box>
                <div className="text-ctn">
                  <Icon name="lightning" />
                  <Heading level={2}>Showcased Potential</Heading>
                  <Heading level={5}>
                    Noobs are people too. It takes a leap of faith to trust
                    someone with limited experience. Covailnt can show you
                    who&apos;s a good bet.
                  </Heading>
                </div>
              </Box>
              <Box>
                <img
                  src="/public/images/signup/rankPotential.png"
                  alt="rank potential"
                />
              </Box>
            </Flex>
          </Box>

          <Box bg="gray1" mb={5} py={3}>
            <img src="/public/images/signup/profile.png" alt="profile" />
          </Box>

          <Box bg="primary" pt={5}>
            <Flex align="center" justify="flex-start" wrap>
              <p>
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
          </Box>
        </main>
      </Flex>
    )
  }
}
