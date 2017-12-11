/* eslint-disable react/no-find-dom-node, prefer-rest-params */
import React from 'react';
import { PropTypes } from 'prop-types';

import T, { TreeNode } from 'rc-tree';
// import T from 'rc-tree';

// import TreeNode from './treenode.component';
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

  onExpand(expandedKeys) {
    console.log('onExpand');
  }

  onCheck() {
    console.log('onCheck');
  }

  onSelect() {
    console.log('onSelect');
  }

  // renderArrow(node) {
  //   if (node.children) {
  //     // const className = true ? 'fa fa-arrow-left' : 'fa fa-arrow-right';
  //     const className = 'fa fa-arrow-left';
  //     return (
  //       <i className={className} aria-hidden="true" />
  //     );
  //   }
  // }

  // {this.renderArrow(node)}
  renderTreeNode = node => (
    node.children ?
      <TreeNode title={node.title} key={node.key}>
        {this.renderTreeNodes(node.children)}
      </TreeNode>
      : <TreeNode title={node.title} key={node.key} isLeaf>
        {this.props.elements[node.key]}
      </TreeNode>
  )

  renderTreeNodes = (nodes = []) => (
    nodes.map(node => this.renderTreeNode(node))
  )

  filterTreeNode = node => (
    !node.key
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
  // prefixCls: PropTypes.string,
  // children: PropTypes.any,
  // checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  // multiple: PropTypes.bool,
  // showLine: PropTypes.bool,
  // showIcon: PropTypes.bool,
  // autoExpandParent: PropTypes.bool,
  // defaultExpandAll: PropTypes.bool,
  // expandedKeys: PropTypes.arrayOf(PropTypes.string),
  // defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
  // checkedKeys: PropTypes.arrayOf(PropTypes.string),
  // defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
  // selectedKeys: PropTypes.arrayOf(PropTypes.string),
  // defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
  // onExpand: PropTypes.func,
  // onCheck: PropTypes.func,
  // onSelect: PropTypes.func,
  // loadData: PropTypes.func,
  // onMouseEnter: PropTypes.func,
  // onMouseLeave: PropTypes.func,
  // onRightClick: PropTypes.func,
  // onDragStart: PropTypes.func,
  // onDragEnter: PropTypes.func,
  // onDragOver: PropTypes.func,
  // onDragLeave: PropTypes.func,
  // onDrop: PropTypes.func,
  // filterTreeNode: PropTypes.func,
  // openTransitionName: PropTypes.string,
  // openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

Tree.defaultProps = {
  elements: {},
  // prefixCls: 'rc-tree',
  // children: ,
  checkable: false,
  // multiple: false,
  // showLine: false,
  showIcon: false,
  // autoExpandParent: true,
  // defaultExpandAll: false,
  // expandedKeys: ,
  // defaultExpandedKeys: [],
  // checkedKeys: ,
  // defaultCheckedKeys: [],
  // selectedKeys: ,
  // defaultSelectedKeys: [],
  // onExpand: this.onExpand,
  // onCheck: ,
  // onSelect: ,
  // loadData: ,
  // onMouseEnter: ,
  // onMouseLeave: ,
  // onRightClick: ,
  // onDragStart: ,
  // onDragEnter: ,
  // onDragOver: ,
  // onDragLeave: ,
  // onDrop: ,
  // filterTreeNode: ,
  // openTransitionName: ,
  // openAnimation:
};
