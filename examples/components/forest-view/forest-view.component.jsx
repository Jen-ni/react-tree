import React from 'react';

import T, { TreeNode } from 'rc-tree';

import { Tree } from '../../../src/tree/index';
import Table from './table.component';
import data from './tree.json';

export default class ForestView extends React.PureComponent {
  renderRcTree = () => (
    <T>
      <TreeNode title="branch 1" key="1">
        <TreeNode title="branch 11" key="1-1">
          <TreeNode title="leaf 1.1.1" key="1-1-1" disableCheckbox />
          <TreeNode title="leaf 1.1.2" key="1-1-2" />
        </TreeNode>
        <TreeNode title="branch 12" key="1-2">
          <TreeNode title="leaf 1.2.1" key="1-2-1" />
          <TreeNode title="leaf 1.2.2" key="1-2-2">
            <Table />
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </T>
  );

  renderTree = props => (<Tree {...props} />)

  render() {
    const props = { data };

    return (
      <div>
        <h3>Default rc-tree:</h3>
        {this.renderRcTree()}
        <h3>Default react-tree, rc-tree without checkboxes and icons:</h3>
        {this.renderTree(props)}
        <h3>Expanded:</h3>
        {this.renderTree({
          defaultExpandedKeys: ['1'],
          ...props,
        })}
        <h3>Customized content:</h3>
        {this.renderTree({
          elements: {
            '2-2': <Table />,
          },
          ...props,
        })}
      </div>
    );
  }
}
