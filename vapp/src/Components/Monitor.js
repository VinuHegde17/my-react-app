import React from 'react'
import HcallBck from './HcallBck';
import Htext from './Htext';
import Heffect from './Heffect';
import Href from './Href';
import HLeffect from './HLeffect';
import Hmemo from './Hmemo';
import Hreducer from './Hreducer';
import Htrans from './Htrans';
import Prop from './Prop';
import Hstate from './Hstate1';
import StatusBar from './Hdebugg';
import ParentComponent from './ParentComponent';
import Parent from './Parent';
import Leffec from './Leffec';
import Stopwatch from './Stopwatch';



function Monitor() {
  return (
    <div>
    <HcallBck/>
    <hr />
    <Htext/>
    <hr />
    <Heffect/>
    <hr />
    <Href/>
    <hr />
    <HLeffect/>
    <Hmemo/>
    <Hreducer/>
    <Htrans/>
    <Hstate/>
    <Prop/>
    <StatusBar/>
    <hr />
    <ParentComponent/>
    <hr />
    <Parent/>
    <hr />
    <Leffec/>
    <hr />
    <Stopwatch/>
  
    </div>
  )
}

export default Monitor
