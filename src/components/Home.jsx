import React from 'react';

import Point from './layout/Point';
import ContentPlatform from './layout/ContentPlatform';
import ContentCustomize from './layout/ContentCustomize';
import ContentBuild from './layout/ContentBuild';
import ContentIDE from './layout/ContentIDE';

export default class Home extends React.Component {
  render() {
    const children = [
      <ContentPlatform id="platform" key="platform" />,
      <ContentCustomize id="customize" key="customize" />,
      <ContentBuild id="build" key="build" />,
      <ContentIDE id="ide" key="ide" />,
      <Point
        key="list"
        ref="list" // eslint-disable-line
        data={['platform', 'customize', 'build', 'ide']}
      />,
    ];

    return (
      <div className="templates-wrapper">
        {children}
      </div>
    );
  }
}
