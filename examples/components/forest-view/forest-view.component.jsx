import React from 'react';

import { Tree } from '../../../src/tree/index';
import T, { TreeNode } from 'rc-tree';

export default class ForestView extends React.PureComponent {

  renderRcTree = () => (
    <T>
      <TreeNode title="branch 1" key="1">
        <TreeNode title="branch 11" key="1-1">
          <TreeNode title="leaf 1.1.1" key="1-1-1" disableCheckbox/>
          <TreeNode title="leaf 1.1.2" key="1-1-2"/>
        </TreeNode>
        <TreeNode title="branch 12" key="1-2">
          <TreeNode title="leaf 1.2.1" key="1-2-1"/>
          <TreeNode title="leaf 1.2.2" key="1-2-2"/>
        </TreeNode>
      </TreeNode>
    </T>
  );

  renderTree = (props) => (
    <Tree {...props}/>
  )

  render() {
    const data = [
      {
        title: "brach 1",
        key: "1",
        children: [
          {
            title: "leaf 1-1",
            key: "1-1"
          },
          {
            title: "leaf 1-2",
            key: "1-2"
          },
        ],
      },
      {
        title: "brach 2",
        key: "2",
        children: [
          {
            title: "leaf 2-1",
            key: "2-1"
          },
          {
            title: "leaf 2-2",
            key: "2-2"
          },
        ],
      },
    ];

    const props = {
      data: data,
      checkable: false,
    }
    return (
      <div>
        {this.renderRcTree()}
        {this.renderTree(props)}
        {this.renderTree({
          showIcon: false,
          defaultExpandedKeys: ["1"],
          ...props
        })}
        {this.renderTree({
          elements: {
            "2-1": <div>Kukkuu</div>
          },
          ...props
        })}
      </div>
    );
  }
}
