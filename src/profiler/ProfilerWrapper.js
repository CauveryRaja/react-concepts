import React, { Profiler } from 'react';
import List from '../lists_keys/List';

class ProfilerWrapper extends React.Component {

    onRenderCallback(id, phase, actualDur, baseDur, startTime, commitTime, interactions) {
        console.log(id, phase, actualDur, baseDur, startTime, commitTime, interactions);
    }

    render() {
        return <Profiler id="wrapper" onRender={this.onRenderCallback}>
            <List></List>
        </Profiler>;
    }
}

export default ProfilerWrapper;