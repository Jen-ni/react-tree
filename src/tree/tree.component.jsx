/* eslint-disable react/no-find-dom-node, prefer-rest-params */
import React from 'react';
import { PropTypes } from 'prop-types';

import T, { TreeNode } from 'rc-tree';

import 'rc-tree/assets/index.css';
import './tree.component.scss';

require('font-awesome-sass-loader');

export default class Tree extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultExpandedKeys: [],
      defaultCheckedKeys: [],
      defaultSelectedKeys: [],
    };
  }

  filterTreeNode = node => (
    !node.key
  )

  renderElement = node => (
    <ul>{node}</ul>
  )

  renderTreeNode = node => (
    node.children ?
      <TreeNode title={node.title} key={node.key}>
        {this.renderTreeNodes(node.children)}
      </TreeNode>
      :
      this.props.elements[node.key] ?
        <TreeNode title={node.title} key={node.key} isLeaf>
          {this.renderElement(this.props.elements[node.key])}
        </TreeNode>
        :
        <TreeNode title={node.title} key={node.key} isLeaf />
  )

  renderTreeNodes = (nodes = []) => (
    nodes.map(node => this.renderTreeNode(node))
  )

  render() {
    return (
      <div className="react-tree">
        <T
          onExpand={this.onExpand}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          {...this.props}
        >
          {this.renderTreeNodes(this.props.data)}
        </T>
      </div>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  elements: PropTypes.objectOf(PropTypes.element),
  checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  showIcon: PropTypes.bool,
};

Tree.defaultProps = {
  elements: {},
  checkable: false,
  showIcon: false,
};
