webpackHotUpdate(0,{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/react/react.js
var react = __webpack_require__(6);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-router/es/Router.js
var Router = __webpack_require__(289);

// EXTERNAL MODULE: ./node_modules/react-router/es/Link.js
var Link = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/create-react-class/index.js
var create_react_class = __webpack_require__(17);
var create_react_class_default = /*#__PURE__*/__webpack_require__.n(create_react_class);

// CONCATENATED MODULE: ./node_modules/react-router/es/IndexLink.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/**
 * An <IndexLink> is used to link to an <IndexRoute>.
 */
var IndexLink = create_react_class_default()({
  displayName: 'IndexLink',

  render: function render() {
    return react_default.a.createElement(Link["a" /* default */], _extends({}, this.props, { onlyActiveOnIndex: true }));
  }
});

/* harmony default export */ var es_IndexLink = (IndexLink);
// EXTERNAL MODULE: ./node_modules/react-router/es/withRouter.js
var withRouter = __webpack_require__(300);

// EXTERNAL MODULE: ./node_modules/react-router/es/IndexRedirect.js
var IndexRedirect = __webpack_require__(302);

// EXTERNAL MODULE: ./node_modules/react-router/es/IndexRoute.js
var IndexRoute = __webpack_require__(303);

// EXTERNAL MODULE: ./node_modules/react-router/es/Redirect.js
var Redirect = __webpack_require__(152);

// EXTERNAL MODULE: ./node_modules/react-router/es/Route.js
var Route = __webpack_require__(304);

// EXTERNAL MODULE: ./node_modules/react-router/es/RouteUtils.js
var RouteUtils = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/react-router/es/RouterContext.js
var RouterContext = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/react-router/es/PropTypes.js
var PropTypes = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/react-router/es/match.js
var match = __webpack_require__(305);

// EXTERNAL MODULE: ./node_modules/history/lib/useQueries.js
var useQueries = __webpack_require__(154);
var useQueries_default = /*#__PURE__*/__webpack_require__.n(useQueries);

// EXTERNAL MODULE: ./node_modules/history/lib/useBasename.js
var useBasename = __webpack_require__(155);
var useBasename_default = /*#__PURE__*/__webpack_require__.n(useBasename);

// CONCATENATED MODULE: ./node_modules/react-router/es/useRouterHistory.js



function useRouterHistory(createHistory) {
  return function (options) {
    var history = useQueries_default()(useBasename_default()(createHistory))(options);
    return history;
  };
}
// EXTERNAL MODULE: ./node_modules/react-router/es/PatternUtils.js
var PatternUtils = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/react-router/es/applyRouterMiddleware.js
var applyRouterMiddleware = __webpack_require__(310);

// EXTERNAL MODULE: ./node_modules/history/lib/createBrowserHistory.js
var createBrowserHistory = __webpack_require__(311);
var createBrowserHistory_default = /*#__PURE__*/__webpack_require__.n(createBrowserHistory);

// CONCATENATED MODULE: ./node_modules/react-router/es/createRouterHistory.js


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function createRouterHistory(createHistory) {
  var history = void 0;
  if (canUseDOM) history = useRouterHistory(createHistory)();
  return history;
}
// CONCATENATED MODULE: ./node_modules/react-router/es/browserHistory.js


/* harmony default export */ var browserHistory = (createRouterHistory(createBrowserHistory_default.a));
// EXTERNAL MODULE: ./node_modules/history/lib/createHashHistory.js
var createHashHistory = __webpack_require__(313);
var createHashHistory_default = /*#__PURE__*/__webpack_require__.n(createHashHistory);

// CONCATENATED MODULE: ./node_modules/react-router/es/hashHistory.js


/* harmony default export */ var hashHistory = (createRouterHistory(createHashHistory_default.a));
// EXTERNAL MODULE: ./node_modules/react-router/es/createMemoryHistory.js
var createMemoryHistory = __webpack_require__(153);

// CONCATENATED MODULE: ./node_modules/react-router/es/index.js
/* components */









/* components (configuration) */










/* utils */















/* histories */







// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(8);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(99);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(110);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(41);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(345);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(63);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__(64);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(65);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(66);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(168);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/warning/browser.js
var browser = __webpack_require__(18);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/rc-tree/es/util.js
/* eslint no-loop-func: 0*/


function getOffset(ele) {
  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  var rect = ele.getBoundingClientRect();
  if (rect.width || rect.height) {
    var doc = ele.ownerDocument;
    var win = doc.defaultView;
    var docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}

function traverseTreeNodes(treeNodes, callback) {
  var traverse = function traverse(subTreeNodes, level, parentsChildrenPos, parentPos) {
    if (Array.isArray(subTreeNodes)) {
      subTreeNodes = subTreeNodes.filter(function (item) {
        return !!item;
      });
    }
    react["Children"].forEach(subTreeNodes, function (item, index) {
      var pos = level + '-' + index;
      parentsChildrenPos.push(pos); // Note: side effect

      var childrenPos = [];
      if (item.props.children && item.type && item.type.isTreeNode) {
        traverse(item.props.children, pos, childrenPos, pos);
      }
      callback(item, index, pos, item.key || pos, childrenPos, parentPos);
    });
  };
  traverse(treeNodes, 0, []);
}

function updateCheckState(obj, checkedPosition, checkIt) {
  var childrenLoop = function childrenLoop(parentObj) {
    parentObj.childrenPos.forEach(function (childPos) {
      var childObj = obj[childPos];
      // User click don't change disabled item checked state
      if (!childObj.disableCheckbox && !childObj.disabled) {
        childObj.halfChecked = false;
        childObj.checked = checkIt;
      }
      childrenLoop(childObj);
    });
  };

  childrenLoop(obj[checkedPosition]);

  var parentLoop = function parentLoop(childObj) {
    if (!childObj.parentPos) return;
    var parentObj = obj[childObj.parentPos];

    var childrenCount = parentObj.childrenPos.length;

    var checkedChildrenCount = 0;
    parentObj.childrenPos.forEach(function (childPos) {
      if (obj[childPos].disableCheckbox) {
        childrenCount -= 1;
        return;
      }
      if (obj[childPos].checked === true) checkedChildrenCount++;else if (obj[childPos].halfChecked === true) checkedChildrenCount += 0.5;
    });

    if (checkedChildrenCount === childrenCount) {
      parentObj.checked = true;
      parentObj.halfChecked = false;
    } else if (checkedChildrenCount > 0) {
      parentObj.halfChecked = true;
      parentObj.checked = false;
    } else {
      parentObj.checked = false;
      parentObj.halfChecked = false;
    }
    parentLoop(parentObj);
  };

  parentLoop(obj[checkedPosition]);
}

function getCheck(treeNodesStates) {
  var halfCheckedKeys = [];
  var checkedKeys = [];
  var checkedNodes = [];
  var checkedNodesPositions = [];
  Object.keys(treeNodesStates).forEach(function (item) {
    var itemObj = treeNodesStates[item];
    if (itemObj.checked) {
      checkedKeys.push(itemObj.key);
      checkedNodes.push(itemObj.node);
      checkedNodesPositions.push({ node: itemObj.node, pos: item });
    } else if (itemObj.halfChecked) {
      halfCheckedKeys.push(itemObj.key);
    }
  });
  return {
    halfCheckedKeys: halfCheckedKeys,
    checkedKeys: checkedKeys,
    checkedNodes: checkedNodes,
    checkedNodesPositions: checkedNodesPositions
  };
}

function getStrictlyValue(checkedKeys, halfChecked) {
  if (halfChecked) {
    return { checked: checkedKeys, halfChecked: halfChecked };
  }
  return checkedKeys;
}

function isPositionPrefix(smallPos, bigPos) {
  if (bigPos.length < smallPos.length) {
    return false;
  }
  // attention: "0-0-1" "0-0-10"
  if (bigPos.length > smallPos.length && bigPos.charAt(smallPos.length) !== '-') {
    return false;
  }
  return bigPos.substr(0, smallPos.length) === smallPos;
}
// CONCATENATED MODULE: ./node_modules/rc-tree/es/Tree.js














function noop() {}

var contextTypes = {
  rcTree: prop_types_default.a.shape({
    selectable: prop_types_default.a.bool
  })
};

var Tree_Tree = function (_React$Component) {
  inherits_default()(Tree, _React$Component);

  function Tree(props) {
    classCallCheck_default()(this, Tree);

    var _this = possibleConstructorReturn_default()(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    Tree__initialiseProps.call(_this);

    var checkedKeys = _this.calcCheckedKeys(props);
    _this.state = {
      expandedKeys: _this.calcExpandedKeys(props),
      checkedKeys: checkedKeys.checkedKeys,
      halfCheckedKeys: checkedKeys.halfCheckedKeys,
      selectedKeys: _this.calcSelectedKeys(props),
      dragNodesKeys: '',
      dragOverNodeKey: '',
      dropNodeKey: ''
    };
    return _this;
  }

  createClass_default()(Tree, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var selectable = this.props.selectable;

      return {
        rcTree: {
          selectable: selectable
        }
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var props = this.props;

      var newState = {};
      var expandedKeys = nextProps.expandedKeys !== props.expandedKeys ? this.calcExpandedKeys(nextProps, true) : undefined;
      if (expandedKeys) {
        newState.expandedKeys = expandedKeys;
      }

      var checkedKeys = nextProps.checkedKeys !== props.checkedKeys || props.loadData ? this.calcCheckedKeys(nextProps, true) : undefined;
      if (checkedKeys) {
        newState.checkedKeys = checkedKeys.checkedKeys;
        newState.halfCheckedKeys = checkedKeys.halfCheckedKeys;
      }

      var selectedKeys = nextProps.selectedKeys !== props.selectedKeys ? this.calcSelectedKeys(nextProps, true) : undefined;
      if (selectedKeys) {
        newState.selectedKeys = selectedKeys;
      }
      this.setState(newState);
    }
  }, {
    key: 'onDragStart',
    value: function onDragStart(e, treeNode) {
      this.dragNode = treeNode;
      var newState = {
        dragNodesKeys: this.getDragNodesKeys(treeNode)
      };
      var expandedKeys = this.getExpandedKeys(treeNode, false);
      if (expandedKeys) {
        newState.expandedKeys = expandedKeys;
      }
      this.setState(newState);
      this.props.onDragStart({
        event: e,
        node: treeNode
      });
    }
  }, {
    key: 'onDragEnter',
    value: function onDragEnter(e, treeNode) {
      var _this2 = this;

      var dropPosition = this.calcDropPosition(e, treeNode);
      if (this.dragNode.props.eventKey === treeNode.props.eventKey && dropPosition === 0) {
        this.setState({
          dragOverNodeKey: '',
          dropPosition: null
        });
        return;
      }
      this.setState({
        dragOverNodeKey: treeNode.props.eventKey,
        dropPosition: dropPosition
      });

      if (!this.delayedDragEnterLogic) {
        this.delayedDragEnterLogic = {};
      }
      Object.keys(this.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this2.delayedDragEnterLogic[key]);
      });
      this.delayedDragEnterLogic[treeNode.props.pos] = setTimeout(function () {
        var expandedKeys = _this2.getExpandedKeys(treeNode, true);
        if (expandedKeys) {
          _this2.setState({ expandedKeys: expandedKeys });
        }
        _this2.props.onDragEnter({
          event: e,
          node: treeNode,
          expandedKeys: expandedKeys && [].concat(toConsumableArray_default()(expandedKeys)) || [].concat(toConsumableArray_default()(_this2.state.expandedKeys))
        });
      }, 400);
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(e, treeNode) {
      this.props.onDragOver({ event: e, node: treeNode });
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(e, treeNode) {
      this.props.onDragLeave({ event: e, node: treeNode });
    }
  }, {
    key: 'onDrop',
    value: function onDrop(e, treeNode) {
      var state = this.state;

      var eventKey = treeNode.props.eventKey;
      this.setState({
        dragOverNodeKey: '',
        dropNodeKey: eventKey
      });
      if (state.dragNodesKeys.indexOf(eventKey) > -1) {
        browser_default()(false, 'Can not drop to dragNode(include it\'s children node)');
        return;
      }

      var posArr = treeNode.props.pos.split('-');
      var res = {
        event: e,
        node: treeNode,
        dragNode: this.dragNode,
        dragNodesKeys: [].concat(toConsumableArray_default()(state.dragNodesKeys)),
        dropPosition: state.dropPosition + Number(posArr[posArr.length - 1])
      };
      if (state.dropPosition !== 0) {
        res.dropToGap = true;
      }
      this.props.onDrop(res);
    }
  }, {
    key: 'onDragEnd',
    value: function onDragEnd(e, treeNode) {
      this.setState({
        dragOverNodeKey: ''
      });
      this.props.onDragEnd({ event: e, node: treeNode });
    }
  }, {
    key: 'onExpand',
    value: function onExpand(treeNode) {
      var _this3 = this;

      var props = this.props,
          state = this.state;

      var expanded = !treeNode.props.expanded;
      var expandedKeys = [].concat(toConsumableArray_default()(state.expandedKeys));
      var eventKey = treeNode.props.eventKey;

      var index = expandedKeys.indexOf(eventKey);
      if (expanded && index === -1) {
        expandedKeys.push(eventKey);
      } else if (!expanded && index > -1) {
        expandedKeys.splice(index, 1);
      }

      var controlled = 'expandedKeys' in props;
      if (!controlled) {
        this.setState({ expandedKeys: expandedKeys });
      }
      props.onExpand(expandedKeys, { node: treeNode, expanded: expanded });

      // After data loaded, need set new expandedKeys
      if (expanded && props.loadData) {
        return props.loadData(treeNode).then(function () {
          if (!controlled) {
            _this3.setState({ expandedKeys: expandedKeys });
          }
        });
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(treeNode) {
      var props = this.props,
          state = this.state;

      var eventKey = treeNode.props.eventKey;
      var selected = !treeNode.props.selected;

      var selectedKeys = [].concat(toConsumableArray_default()(state.selectedKeys));
      if (!selected) {
        var index = selectedKeys.indexOf(eventKey);
        selectedKeys.splice(index, 1);
      } else if (!props.multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys.push(eventKey);
      }

      // TODO: can be optimized if we remove selectedNodes in API
      var selectedNodes = [];
      if (selectedKeys.length) {
        traverseTreeNodes(props.children, function (item) {
          if (selectedKeys.indexOf(item.key) !== -1) {
            selectedNodes.push(item);
          }
        });
      }

      if (!('selectedKeys' in props)) {
        this.setState({
          selectedKeys: selectedKeys
        });
      }

      var eventObj = {
        event: 'select',
        selected: selected,
        node: treeNode,
        selectedNodes: selectedNodes
      };
      props.onSelect(selectedKeys, eventObj);
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter(e, treeNode) {
      this.props.onMouseEnter({ event: e, node: treeNode });
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave(e, treeNode) {
      this.props.onMouseLeave({ event: e, node: treeNode });
    }
  }, {
    key: 'onContextMenu',
    value: function onContextMenu(e, treeNode) {
      if (this.props.onRightClick) {
        e.preventDefault();
        this.props.onRightClick({ event: e, node: treeNode });
      }
    }

    // all keyboard events callbacks run from here at first

  }, {
    key: 'getOpenTransitionName',
    value: function getOpenTransitionName() {
      var props = this.props;
      var transitionName = props.openTransitionName;
      var animationName = props.openAnimation;
      if (!transitionName && typeof animationName === 'string') {
        return props.prefixCls + '-open-' + animationName;
      }
      return transitionName;
    }
  }, {
    key: 'getDragNodesKeys',
    value: function getDragNodesKeys(treeNode) {
      var dragNodesKeys = [];
      traverseTreeNodes(treeNode.props.children, function (item, index, pos, key) {
        if (isPositionPrefix(treeNode.props.pos, pos)) {
          dragNodesKeys.push(key);
        }
      });
      dragNodesKeys.push(treeNode.props.eventKey || treeNode.props.pos);
      return dragNodesKeys;
    }
  }, {
    key: 'getExpandedKeys',
    value: function getExpandedKeys(treeNode, expand) {
      var eventKey = treeNode.props.eventKey;
      var expandedKeys = this.state.expandedKeys;
      var expandedIndex = expandedKeys.indexOf(eventKey);
      if (!expand && expandedIndex > -1) {
        var exKeys = [].concat(toConsumableArray_default()(expandedKeys));
        exKeys.splice(expandedIndex, 1);
        return exKeys;
      }
      if (expand && expandedKeys.indexOf(eventKey) === -1) {
        return expandedKeys.concat([eventKey]);
      }
    }
  }, {
    key: 'generateTreeNodesStates',
    value: function generateTreeNodesStates(children, checkedKeys) {
      var checkedPositions = [];
      var treeNodesStates = {};
      traverseTreeNodes(children, function (item, _, pos, key, childrenPos, parentPos) {
        treeNodesStates[pos] = {
          node: item,
          key: key,
          checked: false,
          halfChecked: false,
          disabled: item.props.disabled,
          disableCheckbox: item.props.disableCheckbox,
          childrenPos: childrenPos,
          parentPos: parentPos
        };
        if (checkedKeys.indexOf(key) !== -1) {
          treeNodesStates[pos].checked = true;
          checkedPositions.push(pos);
        }
      });
      checkedPositions.forEach(function (checkedPosition) {
        updateCheckState(treeNodesStates, checkedPosition, true);
      });
      return treeNodesStates;
    }
  }, {
    key: 'calcExpandedKeys',
    value: function calcExpandedKeys(props, isNotInit) {
      var expandedKeys = props.expandedKeys || (isNotInit ? undefined : props.defaultExpandedKeys);
      if (!expandedKeys) {
        return undefined;
      }
      var expandAll = isNotInit ? false : props.defaultExpandAll;
      if (!expandAll && !props.autoExpandParent) {
        return expandedKeys;
      }

      var expandedPositionArr = [];
      if (props.autoExpandParent) {
        traverseTreeNodes(props.children, function (item, index, pos, key) {
          if (expandedKeys.indexOf(key) > -1) {
            expandedPositionArr.push(pos);
          }
        });
      }
      var filterExpandedKeysSet = {};
      traverseTreeNodes(props.children, function (item, index, pos, key) {
        if (expandAll) {
          filterExpandedKeysSet[key] = true;
        } else if (props.autoExpandParent) {
          var isCurrentParentOfExpanded = expandedPositionArr.some(function (p) {
            return isPositionPrefix(pos, p);
          });
          if (isCurrentParentOfExpanded) {
            filterExpandedKeysSet[key] = true;
          }
        }
      });
      var filterExpandedKeys = Object.keys(filterExpandedKeysSet);
      return filterExpandedKeys.length ? filterExpandedKeys : expandedKeys;
    }
  }, {
    key: 'calcCheckedKeys',
    value: function calcCheckedKeys(props, isNotInit) {
      if (!props.checkable) {
        return { checkedKeys: [], halfCheckedKeys: [] };
      }

      var checkedKeys = props.checkedKeys || (isNotInit && !props.loadData ? undefined : props.defaultCheckedKeys);
      if (!checkedKeys) {
        return undefined;
      }
      if (Array.isArray(checkedKeys)) {
        checkedKeys = { checkedKeys: checkedKeys, halfCheckedKeys: [] };
      } else if ((typeof checkedKeys === 'undefined' ? 'undefined' : typeof_default()(checkedKeys)) === 'object') {
        checkedKeys = { checkedKeys: checkedKeys.checked, halfCheckedKeys: checkedKeys.halfChecked };
      }

      if (!props.checkStrictly) {
        var checked = checkedKeys.checkedKeys || [];
        var treeNodesStates = this.generateTreeNodesStates(props.children, checked);
        return getCheck(treeNodesStates);
      }

      return checkedKeys;
    }
  }, {
    key: 'calcSelectedKeys',
    value: function calcSelectedKeys(props, isNotInit) {
      var selectedKeys = props.selectedKeys || (isNotInit ? undefined : props.defaultSelectedKeys);
      if (!selectedKeys) {
        return undefined;
      }
      if (props.multiple) {
        return [].concat(toConsumableArray_default()(selectedKeys));
      }
      if (selectedKeys.length) {
        return [selectedKeys[0]];
      }
      return selectedKeys;
    }
  }, {
    key: 'calcDropPosition',
    value: function calcDropPosition(e, treeNode) {
      var offsetTop = getOffset(treeNode.selectHandle).top;
      var offsetHeight = treeNode.selectHandle.offsetHeight;
      var pageY = e.pageY;
      var gapHeight = 2; // TODO: remove hard code
      if (pageY > offsetTop + offsetHeight - gapHeight) {
        return 1;
      }
      if (pageY < offsetTop + gapHeight) {
        return -1;
      }
      return 0;
    }
  }, {
    key: 'renderTreeNode',
    value: function renderTreeNode(child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var state = this.state,
          props = this.props;

      var pos = level + '-' + index;
      var key = child.key || pos;

      var childProps = {
        root: this,
        eventKey: key,
        pos: pos,
        loadData: props.loadData,
        prefixCls: props.prefixCls,
        showIcon: props.showIcon,
        draggable: props.draggable,
        dragOver: state.dragOverNodeKey === key && state.dropPosition === 0,
        dragOverGapTop: state.dragOverNodeKey === key && state.dropPosition === -1,
        dragOverGapBottom: state.dragOverNodeKey === key && state.dropPosition === 1,
        expanded: state.expandedKeys.indexOf(key) !== -1,
        selected: state.selectedKeys.indexOf(key) !== -1,
        openTransitionName: this.getOpenTransitionName(),
        openAnimation: props.openAnimation,
        filterTreeNode: this.filterTreeNode
      };
      if (props.checkable) {
        childProps.checkable = props.checkable;
        childProps.checked = state.checkedKeys.indexOf(key) !== -1;
        childProps.halfChecked = state.halfCheckedKeys.indexOf(key) !== -1;
      }
      return react_default.a.cloneElement(child, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = classnames_default()(props.prefixCls, props.className, defineProperty_default()({}, props.prefixCls + '-show-line', props.showLine));
      var domProps = {};
      if (props.focusable) {
        domProps.tabIndex = '0';
        domProps.onKeyDown = this.onKeyDown;
      }

      return react_default.a.createElement(
        'ul',
        extends_default()({}, domProps, {
          className: className,
          role: 'tree-node',
          unselectable: 'on'
        }),
        react_default.a.Children.map(props.children, this.renderTreeNode, this)
      );
    }
  }]);

  return Tree;
}(react_default.a.Component);

Tree_Tree.propTypes = {
  prefixCls: prop_types_default.a.string,
  children: prop_types_default.a.any,
  showLine: prop_types_default.a.bool,
  showIcon: prop_types_default.a.bool,
  selectable: prop_types_default.a.bool,
  multiple: prop_types_default.a.bool,
  checkable: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.node]),
  checkStrictly: prop_types_default.a.bool,
  draggable: prop_types_default.a.bool,
  autoExpandParent: prop_types_default.a.bool,
  defaultExpandAll: prop_types_default.a.bool,
  defaultExpandedKeys: prop_types_default.a.arrayOf(prop_types_default.a.string),
  expandedKeys: prop_types_default.a.arrayOf(prop_types_default.a.string),
  defaultCheckedKeys: prop_types_default.a.arrayOf(prop_types_default.a.string),
  checkedKeys: prop_types_default.a.oneOfType([prop_types_default.a.arrayOf(prop_types_default.a.string), prop_types_default.a.object]),
  defaultSelectedKeys: prop_types_default.a.arrayOf(prop_types_default.a.string),
  selectedKeys: prop_types_default.a.arrayOf(prop_types_default.a.string),
  onExpand: prop_types_default.a.func,
  onCheck: prop_types_default.a.func,
  onSelect: prop_types_default.a.func,
  loadData: prop_types_default.a.func,
  onMouseEnter: prop_types_default.a.func,
  onMouseLeave: prop_types_default.a.func,
  onRightClick: prop_types_default.a.func,
  onDragStart: prop_types_default.a.func,
  onDragEnter: prop_types_default.a.func,
  onDragOver: prop_types_default.a.func,
  onDragLeave: prop_types_default.a.func,
  onDrop: prop_types_default.a.func,
  onDragEnd: prop_types_default.a.func,
  filterTreeNode: prop_types_default.a.func,
  openTransitionName: prop_types_default.a.string,
  openAnimation: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object])
};
Tree_Tree.childContextTypes = contextTypes;
Tree_Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  checkStrictly: false,
  draggable: false,
  autoExpandParent: true,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  onExpand: noop,
  onCheck: noop,
  onSelect: noop,
  onDragStart: noop,
  onDragEnter: noop,
  onDragOver: noop,
  onDragLeave: noop,
  onDrop: noop,
  onDragEnd: noop,
  onMouseEnter: noop,
  onMouseLeave: noop
};

var Tree__initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onCheck = function (treeNode) {
    var props = _this4.props,
        state = _this4.state;

    var checked = !treeNode.props.checked || treeNode.props.halfChecked;
    var eventObj = {
      event: 'check',
      node: treeNode,
      checked: checked
    };

    if (props.checkStrictly) {
      var eventKey = treeNode.props.eventKey;
      var checkedKeys = [].concat(toConsumableArray_default()(state.checkedKeys));
      var index = checkedKeys.indexOf(eventKey);
      if (checked && index === -1) {
        checkedKeys.push(eventKey);
      }
      if (!checked && index > -1) {
        checkedKeys.splice(index, 1);
      }

      eventObj.checkedNodes = [];
      traverseTreeNodes(props.children, function (item) {
        if (checkedKeys.indexOf(item.key) !== -1) {
          eventObj.checkedNodes.push(item);
        }
      });

      if (!('checkedKeys' in props)) {
        _this4.setState({
          checkedKeys: checkedKeys
        });
      }
      props.onCheck(getStrictlyValue(checkedKeys, state.halfCheckedKeys), eventObj);
    } else {
      var treeNodesStates = _this4.generateTreeNodesStates(props.children, state.checkedKeys);
      treeNodesStates[treeNode.props.pos].checked = checked;
      treeNodesStates[treeNode.props.pos].halfChecked = false;
      updateCheckState(treeNodesStates, treeNode.props.pos, checked);

      var checkKeys = getCheck(treeNodesStates);
      eventObj.checkedNodes = checkKeys.checkedNodes;
      eventObj.checkedNodesPositions = checkKeys.checkedNodesPositions; // TODO: not in API
      eventObj.halfCheckedKeys = checkKeys.halfCheckedKeys; // TODO: not in API

      if (!('checkedKeys' in props)) {
        _this4.setState({
          checkedKeys: checkKeys.checkedKeys,
          halfCheckedKeys: checkKeys.halfCheckedKeys
        });
      }
      props.onCheck(checkKeys.checkedKeys, eventObj);
    }
  };

  this.onKeyDown = function (e) {
    e.preventDefault();
  };

  this.filterTreeNode = function (treeNode) {
    var filterTreeNode = _this4.props.filterTreeNode;
    if (typeof filterTreeNode !== 'function' || treeNode.props.disabled) {
      return false;
    }
    return filterTreeNode.call(_this4, treeNode);
  };
};

/* harmony default export */ var es_Tree = (Tree_Tree);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/ChildrenUtils.js


function toArrayChildren(children) {
  var ret = [];
  react_default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}
// CONCATENATED MODULE: ./node_modules/css-animation/es/Event.js
var EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete EVENT_NAME_MAP.transitionend.transition;
  }

  for (var baseEventName in EVENT_NAME_MAP) {
    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
      var baseEvents = EVENT_NAME_MAP[baseEventName];
      for (var styleName in baseEvents) {
        if (styleName in style) {
          endEvents.push(baseEvents[styleName]);
          break;
        }
      }
    }
  }
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },


  endEvents: endEvents,

  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ var Event = (TransitionEvents);
// EXTERNAL MODULE: ./node_modules/component-classes/index.js
var component_classes = __webpack_require__(362);
var component_classes_default = /*#__PURE__*/__webpack_require__.n(component_classes);

// CONCATENATED MODULE: ./node_modules/css-animation/es/index.js




var isCssAnimationSupported = Event.endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var es_cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes_default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

es_cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    Event.removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  Event.addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

es_cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

es_cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ var es = (es_cssAnimation);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/util.js
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ var es_util = (util);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/AnimateChild.js











var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild_AnimateChild = function (_React$Component) {
  inherits_default()(AnimateChild, _React$Component);

  function AnimateChild() {
    classCallCheck_default()(this, AnimateChild);

    return possibleConstructorReturn_default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  createClass_default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (es_util.isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (es_util.isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (es_util.isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom_default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : typeof_default()(transitionName)) === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = es(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react_default.a.Component);

AnimateChild_AnimateChild.propTypes = {
  children: prop_types_default.a.any
};
/* harmony default export */ var es_AnimateChild = (AnimateChild_AnimateChild);
// CONCATENATED MODULE: ./node_modules/rc-animate/es/Animate.js










var defaultKey = 'rc_animate_' + Date.now();


function getChildrenFromProps(props) {
  var children = props.children;
  if (react_default.a.isValidElement(children)) {
    if (!children.key) {
      return react_default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function Animate_noop() {}

var Animate_Animate = function (_React$Component) {
  inherits_default()(Animate, _React$Component);

  function Animate(props) {
    classCallCheck_default()(this, Animate);

    var _this = possibleConstructorReturn_default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    Animate__initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: toArrayChildren(getChildrenFromProps(_this.props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  createClass_default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = toArrayChildren(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? toArrayChildren(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && findChildInChildrenByKey(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react_default.a.cloneElement(nextChild || currentChild, defineProperty_default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !findChildInChildrenByKey(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = mergeChildren(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && findChildInChildrenByKey(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = findShownChildInChildrenByKey(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && findChildInChildrenByKey(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = findShownChildInChildrenByKey(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return findShownChildInChildrenByKey(currentChildren, key, showProp);
      }
      return findChildInChildrenByKey(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react_default.a.createElement(
            es_AnimateChild,
            {
              key: child.key,
              ref: function ref(node) {
                return _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = extends_default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react_default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react_default.a.Component);

Animate_Animate.propTypes = {
  component: prop_types_default.a.any,
  componentProps: prop_types_default.a.object,
  animation: prop_types_default.a.object,
  transitionName: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]),
  transitionEnter: prop_types_default.a.bool,
  transitionAppear: prop_types_default.a.bool,
  exclusive: prop_types_default.a.bool,
  transitionLeave: prop_types_default.a.bool,
  onEnd: prop_types_default.a.func,
  onEnter: prop_types_default.a.func,
  onLeave: prop_types_default.a.func,
  onAppear: prop_types_default.a.func,
  showProp: prop_types_default.a.string
};
Animate_Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: Animate_noop,
  onEnter: Animate_noop,
  onLeave: Animate_noop,
  onAppear: Animate_noop
};

var Animate__initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else {
      if (type === 'appear') {
        if (es_util.allowAppearCallback(props)) {
          props.onAppear(key);
          props.onEnd(key, true);
        }
      } else {
        if (es_util.allowEnterCallback(props)) {
          props.onEnter(key);
          props.onEnd(key, true);
        }
      }
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = toArrayChildren(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (es_util.allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!isSameChildren(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ var es_Animate = (Animate_Animate);
// CONCATENATED MODULE: ./node_modules/rc-util/es/Children/toArray.js


function toArray(children) {
  var ret = [];
  react_default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}
// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js














var defaultTitle = '---';

var TreeNode_TreeNode = function (_React$Component) {
  inherits_default()(TreeNode, _React$Component);

  function TreeNode(props) {
    classCallCheck_default()(this, TreeNode);

    var _this = possibleConstructorReturn_default()(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    _this.onCheck = function () {
      _this.props.root.onCheck(_this);
    };

    _this.onMouseEnter = function (e) {
      e.preventDefault();
      _this.props.root.onMouseEnter(e, _this);
    };

    _this.onMouseLeave = function (e) {
      e.preventDefault();
      _this.props.root.onMouseLeave(e, _this);
    };

    _this.onContextMenu = function (e) {
      _this.props.root.onContextMenu(e, _this);
    };

    _this.onDragStart = function (e) {
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: true
      });
      _this.props.root.onDragStart(e, _this);
      try {
                        e.dataTransfer.setData('text/plain', '');
      } catch (error) {
              }
    };

    _this.onDragEnter = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.props.root.onDragEnter(e, _this);
    };

    _this.onDragOver = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.props.root.onDragOver(e, _this);
    };

    _this.onDragLeave = function (e) {
      e.stopPropagation();
      _this.props.root.onDragLeave(e, _this);
    };

    _this.onDrop = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      _this.props.root.onDrop(e, _this);
    };

    _this.onDragEnd = function (e) {
      e.stopPropagation();
      _this.setState({
        dragNodeHighlight: false
      });
      _this.props.root.onDragEnd(e, _this);
    };

    _this.onExpand = function () {
      var callbackPromise = _this.props.root.onExpand(_this);
      if (callbackPromise && (typeof callbackPromise === 'undefined' ? 'undefined' : typeof_default()(callbackPromise)) === 'object') {
        var setLoading = function setLoading(dataLoading) {
          _this.setState({ dataLoading: dataLoading });
        };
        setLoading(true);
        callbackPromise.then(function () {
          setLoading(false);
        }, function () {
          setLoading(false);
        });
      }
    };

    _this.saveSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.state = {
      dataLoading: false,
      dragNodeHighlight: false
    };
    return _this;
  }

  createClass_default()(TreeNode, [{
    key: 'onSelect',
    value: function onSelect() {
      this.props.root.onSelect(this);
    }
  }, {
    key: 'onKeyDown',


        value: function onKeyDown(e) {
      e.preventDefault();
    }
  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var props = this.props,
          context = this.context;

      return 'selectable' in props ? props.selectable : context.rcTree.selectable;
    }
  }, {
    key: 'renderSwitcher',
    value: function renderSwitcher(props, expandedState) {
      var prefixCls = props.prefixCls;
      var switcherCls = classnames_default()(prefixCls + '-switcher', prefixCls + '-switcher_' + expandedState, defineProperty_default()({}, prefixCls + '-switcher-disabled', props.disabled));
      return react_default.a.createElement('span', { className: switcherCls, onClick: props.disabled ? null : this.onExpand });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(props) {
      var prefixCls = props.prefixCls;
      var checkboxCls = defineProperty_default()({}, prefixCls + '-checkbox', true);
      if (props.checked) {
        checkboxCls[prefixCls + '-checkbox-checked'] = true;
      } else if (props.halfChecked) {
        checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
      }
      var customEle = null;
      if (typeof props.checkable !== 'boolean') {
        customEle = props.checkable;
      }
      if (props.disabled || props.disableCheckbox) {
        checkboxCls[prefixCls + '-checkbox-disabled'] = true;
        return react_default.a.createElement(
          'span',
          { className: classnames_default()(checkboxCls) },
          customEle
        );
      }
      return react_default.a.createElement(
        'span',
        {
          className: classnames_default()(checkboxCls),
          onClick: this.onCheck
        },
        customEle
      );
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(props) {
      var renderFirst = this.renderFirst;
      this.renderFirst = 1;
      var transitionAppear = true;
      if (!renderFirst && props.expanded) {
        transitionAppear = false;
      }
      var children = null;
      if (props.children) {
        children = toArray(props.children).filter(function (item) {
          return !!item;
        });
      }
      var newChildren = children;
      if (children && (Array.isArray(children) && children.length && children.every(function (item) {
        return item.type && item.type.isTreeNode;
      }) || children.type && children.type.isTreeNode)) {
        var animProps = {};
        if (props.openTransitionName) {
          animProps.transitionName = props.openTransitionName;
        } else if (typeof_default()(props.openAnimation) === 'object') {
          animProps.animation = extends_default()({}, props.openAnimation);
          if (!transitionAppear) {
            delete animProps.animation.appear;
          }
        }
        var cls = classnames_default()(props.prefixCls + '-child-tree', defineProperty_default()({}, props.prefixCls + '-child-tree-open', props.expanded));
        newChildren = react_default.a.createElement(
          es_Animate,
          extends_default()({}, animProps, {
            showProp: 'data-expanded',
            transitionAppear: transitionAppear,
            component: ''
          }),
          !props.expanded ? null : react_default.a.createElement(
            'ul',
            { className: cls, 'data-expanded': props.expanded },
            react_default.a.Children.map(children, function (item, index) {
              return props.root.renderTreeNode(item, index, props.pos);
            }, props.root)
          )
        );
      }
      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _iconEleCls,
          _this2 = this;

      var props = this.props;

      var prefixCls = props.prefixCls;
      var expandedState = props.expanded ? 'open' : 'close';
      var iconState = expandedState;

      var canRenderSwitcher = true;
      var content = props.title;
      var newChildren = this.renderChildren(props);
      if (!newChildren || newChildren === props.children) {
                newChildren = null;
        if (!props.loadData || props.isLeaf) {
          canRenderSwitcher = false;
          iconState = 'docu';
        }
      }
                        
      var iconEleCls = (_iconEleCls = {}, defineProperty_default()(_iconEleCls, prefixCls + '-iconEle', true), defineProperty_default()(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), defineProperty_default()(_iconEleCls, prefixCls + '-icon__' + iconState, true), _iconEleCls);

      var selectHandle = function selectHandle() {
        var icon = props.showIcon || props.loadData && _this2.state.dataLoading ? react_default.a.createElement('span', { className: classnames_default()(iconEleCls) }) : null;
        var title = react_default.a.createElement(
          'span',
          { className: prefixCls + '-title' },
          content
        );
        var wrap = prefixCls + '-node-content-wrapper';
        var domProps = {
          className: wrap + ' ' + wrap + '-' + (iconState === expandedState ? iconState : 'normal'),
          onMouseEnter: _this2.onMouseEnter,
          onMouseLeave: _this2.onMouseLeave,
          onContextMenu: _this2.onContextMenu
        };
        if (!props.disabled) {
          if (props.selected || _this2.state.dragNodeHighlight) {
            domProps.className += ' ' + prefixCls + '-node-selected';
          }
          domProps.onClick = function (e) {
            if (_this2.isSelectable()) {
              e.preventDefault();
              _this2.onSelect();
            } else if (props.checkable && !props.disableCheckbox) {
              e.preventDefault();
                            _this2.onCheck();
            }
          };
          if (props.draggable) {
            domProps.className += ' draggable';
            domProps.draggable = true;
            domProps['aria-grabbed'] = true;
            domProps.onDragStart = _this2.onDragStart;
          }
        }
        return react_default.a.createElement(
          'span',
          extends_default()({
            ref: _this2.saveSelectHandle,
            title: typeof content === 'string' ? content : ''
          }, domProps),
          icon,
          title
        );
      };

      var liProps = {};
      if (props.draggable) {
        liProps.onDragEnter = this.onDragEnter;
        liProps.onDragOver = this.onDragOver;
        liProps.onDragLeave = this.onDragLeave;
        liProps.onDrop = this.onDrop;
        liProps.onDragEnd = this.onDragEnd;
      }

      var disabledCls = '';
      var dragOverCls = '';
      if (props.disabled) {
        disabledCls = prefixCls + '-treenode-disabled';
      } else if (props.dragOver) {
        dragOverCls = 'drag-over';
      } else if (props.dragOverGapTop) {
        dragOverCls = 'drag-over-gap-top';
      } else if (props.dragOverGapBottom) {
        dragOverCls = 'drag-over-gap-bottom';
      }

      var filterCls = props.filterTreeNode(this) ? 'filter-node' : '';

      var renderNoopSwitcher = function renderNoopSwitcher() {
        return react_default.a.createElement('span', { className: prefixCls + '-switcher ' + prefixCls + '-switcher-noop' });
      };

      return react_default.a.createElement(
        'li',
        extends_default()({}, liProps, {
          className: classnames_default()(props.className, disabledCls, dragOverCls, filterCls)
        }),
        canRenderSwitcher ? this.renderSwitcher(props, expandedState) : renderNoopSwitcher(),
        props.checkable ? this.renderCheckbox(props) : null,
        selectHandle(),
        newChildren
      );
    }
  }]);

  return TreeNode;
}(react_default.a.Component);

TreeNode_TreeNode.propTypes = {
  prefixCls: prop_types_default.a.string,
  disabled: prop_types_default.a.bool,
  disableCheckbox: prop_types_default.a.bool,
  expanded: prop_types_default.a.bool,
  isLeaf: prop_types_default.a.bool,
  root: prop_types_default.a.object,
  onSelect: prop_types_default.a.func
};
TreeNode_TreeNode.contextTypes = contextTypes;
TreeNode_TreeNode.defaultProps = {
  title: defaultTitle
};


TreeNode_TreeNode.isTreeNode = 1;

/* harmony default export */ var es_TreeNode = (TreeNode_TreeNode);
// CONCATENATED MODULE: ./node_modules/rc-tree/es/index.js


es_Tree.TreeNode = es_TreeNode;


/* harmony default export */ var rc_tree_es = (es_Tree);
// EXTERNAL MODULE: ./node_modules/rc-tree/assets/index.css
var assets = __webpack_require__(363);
var assets_default = /*#__PURE__*/__webpack_require__.n(assets);

// CONCATENATED MODULE: ./src/tree/tree.component.jsx
var tree_component__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/no-find-dom-node, prefer-rest-params */








var tree_component_Tree = function (_React$PureComponent) {
  _inherits(Tree, _React$PureComponent);

  function Tree(props) {
    _classCallCheck(this, Tree);

    var _this = _possibleConstructorReturn(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).call(this, props));

    _this.renderTreeNode = function () {
      return _this.__renderTreeNode__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.renderTreeNodes = function () {
      return _this.__renderTreeNodes__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      defaultExpandedKeys: [],
      defaultCheckedKeys: [],
      defaultSelectedKeys: []
    };
    return _this;
  }

  _createClass(Tree, [{
    key: 'onExpand',
    value: function onExpand(expandedKeys) {
      console.log('onExpand');
    }
  }, {
    key: 'onCheck',
    value: function onCheck() {
      console.log('onCheck');
    }
  }, {
    key: 'onSelect',
    value: function onSelect() {
      console.log('onSelect');
    }
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

  }, {
    key: '__renderTreeNode__REACT_HOT_LOADER__',
    value: function __renderTreeNode__REACT_HOT_LOADER__() {
      return this.__renderTreeNode__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__renderTreeNode__REACT_HOT_LOADER__',
    value: function __renderTreeNode__REACT_HOT_LOADER__(node) {
      return node.children ? react_default.a.createElement(
        es_TreeNode,
        { title: node.title, key: node.key },
        this.renderTreeNodes(node.children)
      ) : react_default.a.createElement(
        es_TreeNode,
        { title: node.title, key: node.key, isLeaf: true },
        this.props.elements[node.key]
      );
    }
  }, {
    key: '__renderTreeNodes__REACT_HOT_LOADER__',
    value: function __renderTreeNodes__REACT_HOT_LOADER__() {
      return this.__renderTreeNodes__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__renderTreeNodes__REACT_HOT_LOADER__',
    value: function __renderTreeNodes__REACT_HOT_LOADER__() {
      var _this2 = this;

      var nodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return nodes.map(function (node) {
        return _this2.renderTreeNode(node);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return react_default.a.createElement(
        rc_tree_es,
        tree_component__extends({
          onExpand: this.onExpand,
          onSelect: this.onSelect,
          onCheck: this.onCheck,
          defaultExpandedKeys: this.state.defaultExpandedKeys,
          defaultSelectedKeys: this.state.defaultSelectedKeys,
          defaultCheckedKeys: this.state.defaultCheckedKeys
        }, this.props),
        this.renderTreeNodes(this.props.data)
      );
    }
  }]);

  return Tree;
}(react_default.a.PureComponent);




tree_component_Tree.propTypes = {
  data: prop_types["PropTypes"].arrayOf(prop_types["PropTypes"].any).isRequired,
  elements: prop_types["PropTypes"].objectOf(prop_types["PropTypes"].element)
  // prefixCls: PropTypes.string,
  // children: PropTypes.any,
  // checkable: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
  // multiple: PropTypes.bool,
  // showLine: PropTypes.bool,
  // showIcon: PropTypes.bool,
  // autoExpandParent: PropTypes.bool,
  //defaultExpandAll: PropTypes.bool,
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

tree_component_Tree.defaultProps = {
  elements: {}
  // prefixCls: 'rc-tree',
  // children: ,
  // checkable: false,
  // multiple: false,
  // showLine: false,
  // showIcon: false,
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(tree_component_Tree, 'Tree', 'C:/Users/ristoje1/react-tree/src/tree/tree.component.jsx');
}();

;
// CONCATENATED MODULE: ./src/tree/index.js


;

var tree__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
// CONCATENATED MODULE: ./examples/components/forest-view/forest-view.component.jsx
var forest_view_component__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var forest_view_component__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function forest_view_component__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function forest_view_component__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function forest_view_component__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var forest_view_component_ForestView = function (_React$PureComponent) {
  forest_view_component__inherits(ForestView, _React$PureComponent);

  function ForestView() {
    var _ref;

    var _temp, _this, _ret;

    forest_view_component__classCallCheck(this, ForestView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = forest_view_component__possibleConstructorReturn(this, (_ref = ForestView.__proto__ || Object.getPrototypeOf(ForestView)).call.apply(_ref, [this].concat(args))), _this), _this.renderRcTree = function () {
      var _this2;

      return (_this2 = _this).__renderRcTree__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), forest_view_component__possibleConstructorReturn(_this, _ret);
  }

  forest_view_component__createClass(ForestView, [{
    key: '__renderRcTree__REACT_HOT_LOADER__',
    value: function __renderRcTree__REACT_HOT_LOADER__() {
      return this.__renderRcTree__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__renderRcTree__REACT_HOT_LOADER__',
    value: function __renderRcTree__REACT_HOT_LOADER__() {
      return react_default.a.createElement(
        rc_tree_es,
        null,
        react_default.a.createElement(
          es_TreeNode,
          { title: 'branch 1', key: '1' },
          react_default.a.createElement(
            es_TreeNode,
            { title: 'branch 11', key: '1-1' },
            react_default.a.createElement(es_TreeNode, { title: 'leaf 1.1.1', key: '1-1-1', disableCheckbox: true }),
            react_default.a.createElement(es_TreeNode, { title: 'leaf 1.1.2', key: '1-1-2' })
          ),
          react_default.a.createElement(
            es_TreeNode,
            { title: 'branch 12', key: '1-2' },
            react_default.a.createElement(es_TreeNode, { title: 'leaf 1.2.1', key: '1-2-1' }),
            react_default.a.createElement(es_TreeNode, { title: 'leaf 1.2.2', key: '1-2-2' })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var data = [{
        title: "brach 1",
        key: "1",
        children: [{
          title: "leaf 1-1",
          key: "1-1"
        }, {
          title: "leaf 1-2",
          key: "1-2"
        }]
      }, {
        title: "brach 2",
        key: "2",
        children: [{
          title: "leaf 2-1",
          key: "2-1"
        }, {
          title: "leaf 2-2",
          key: "2-2"
        }]
      }];

      var props = {
        data: data,
        checkable: false
      };
      return react_default.a.createElement(
        'div',
        null,
        this.renderRcTree(),
        this.renderTree(props),
        this.renderTree(forest_view_component__extends({
          showIcon: false,
          defaultExpandedKeys: ["1"]
        }, props)),
        this.renderTree(forest_view_component__extends({
          elements: {
            "2-1": react_default.a.createElement(
              'div',
              null,
              'Kukkuu'
            )
          }
        }, props))
      );
    }
  }]);

  return ForestView;
}(react_default.a.PureComponent);


;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(forest_view_component_ForestView, 'ForestView', 'C:/Users/ristoje1/react-tree/examples/components/forest-view/forest-view.component.jsx');
}();

;
// CONCATENATED MODULE: ./examples/index.jsx
/* eslint-disable no-underscore-dangle */





// import './app.component.scss';

__webpack_require__(367);

Object(react_dom["render"])(react_default.a.createElement(
  Router["a" /* default */],
  { history: browserHistory },
  react_default.a.createElement(Route["a" /* default */], { path: '/', component: forest_view_component_ForestView })
), document.getElementById('oc-examples'));
;

var examples__temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ })

})
//# sourceMappingURL=0.221cc0dd36ef1644df07.hot-update.js.map