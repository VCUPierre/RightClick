import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import ProfilePic from './ProfilePic/ProfilePic'
import LinkGroup from './LinkGroup/LinkGroup'
import { LINK_GROUP_1 } from '../../constants.js'

const Home = () => (
    <Grid centered columns={2}>
        <Grid.Row>
            <GridColumn>
                <Profile />
            </GridColumn>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <ProfilePic />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <LinkGroup links={LINK_GROUP_1}/>
        </Grid.Row>
    </Grid>
)
export default Home