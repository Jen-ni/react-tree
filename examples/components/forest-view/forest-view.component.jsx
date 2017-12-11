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
        title: "branch 1",
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
        title: "branch 2",
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
    }
    return (
      <div>
        <h3>Default rc-tree:</h3>
        {this.renderRcTree()}
        <h3>Default react-tree, rc-tree without checkboxes and icons:</h3>
        {this.renderTree(props)}
        <h3>Expanded:</h3>
        {this.renderTree({
          defaultExpandedKeys: ["1"],
          ...props
        })}
        <h3>Customized content:</h3>
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
