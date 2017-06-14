import React, { Component } from 'react'
import { Icon, Heading, Logo, Button } from 'components/elements'
import connections from 'images/signup/avatarConnections.png'
import lady from 'images/signup/ladyAvatar.png'
import rankEarned from 'images/signup/rankEarned.png'
import rankPotential from 'images/signup/rankPotential.png'
import profile from 'images/signup/profile.png'
import theme from 'theme'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id='landing-page-ctn'>
        <div className='header-ctn'>
          <Logo />
        </div>

        <main>
          <div className='top-ctn'>
            <div className='left-ctn'>
              <Heading level={2} >What if you could spend less time resourcing, and more time collaborating?</Heading>
              <Heading level={3} >Covailnt let’s you see your fellow freelancers bandwidth in real time, so you always know who’s free.</Heading>
              <Button>I'm in! Let's setup my free profile.</Button>
            </div>
            <div className='right-ctn'>
              <img src={connections} alt='users with donut charts' />
            </div>
          </div>

          <div className='middle-ctn'>
            <Heading level={1}>What is Covailnt about?</Heading>

            <div className='availability-ctn'>
              <div className='text-ctn'>
                <Icon name='clock-o' color='primary' />
                <Heading level={4}>Real-time availability</Heading>
                <Heading level={5}>Work needs to be done. Determine a connection's bandwidth with a glance of a profile photo. Gone are the back and forth emails that start with "Hey, you busy?"</Heading>
              </div>
              <div className='image-ctn'>
                <img src={lady} alt="avatar"/>
              </div>
            </div>

            <div className='ratings-ctn'>
              <div className='text-ctn'>
                <Icon name='star' color='primary' />
                <Heading level={4}>Real-time availability</Heading>
                <Heading level={5}>It takes two to tango, right? Review shouldn't favor one side over the other. We're in this together, and Covailnt Rank rewards that balance.</Heading>
              </div>
              <div className='image-ctn'>
                <img src={rankEarned} alt="rank earned"/>
              </div>
            </div>

            <div className='potential-ctn'>
              <div className='text-ctn'>
                <Icon name='bolt' color='primary' />
                <Heading level={4}>Showcased Potential</Heading>
                <Heading level={5}>Noobs are people too. It takes a leap of faith to trust someone with limited experience. Covailnt can show you who's a good bet.</Heading>
              </div>
              <div className='image-ctn'>
                <img src={rankPotential} alt="rank potential"/>
              </div>
            </div>

            <img src={profile} alt="profile"/>

          </div>
        </main>

        <aside style={{backgroundColor: theme.color.primary}}>
          <Heading level={4}>
            Covailnt <strong>connects you to the freelancers you already know, </strong>in an environment that rewards your relationships, collaboration and transparency
          </Heading>
          <Button>I'm in! Let's setup my profile</Button>
        </aside>
      </div>
    )
  }
}
