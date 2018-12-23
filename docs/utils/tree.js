const treeData = [{
  key: '0-0',
  title: '一级_A',
  children: [{
    key: '0-0-0',
    title: '二级_A',
    children: [{
      key: '0-0-0-0',
      title: '三级_A'
    }, {
      key: '0-0-0-1',
      title: '三级_B'
    }]
  }]
}, {
  key: '0-1',
  title: '一级_B',
  children: [{
    key: '0-1-0',
    title: '二级_B',
    children: [{
      key: '0-1-0-0',
      title: '三级_B'
    }, {
      key: '0-1-0-1',
      title: '三级_B'
    }]
  }]
}];

/**
 * @desc: 树形结构扁平化
 */

// 本身不带 parentKeys 数组
const treeDataToPlanishDataOne = (list, parent, level = 0) => {
  return list.reduce((prev, {
    children = [],
    ...rest
  }) => {
    const parentKeys = parent ? parent.concat(rest.key) : [rest.key];
    return prev.concat({ ...rest,
      parentKeys,
      level
    }, treeDataToPlanishDataOne(children, parentKeys, level + 1));
  }, []);
}

// 字符串
const treeDataToPlanishDataTwo = (list, parent, level = 0) => {
  return list.reduce((prev, {
    children = [],
    ...rest
  }) => {
    const parentKey = parent || '';
    return prev.concat({ ...rest,
      parentKey,
      level
    }, treeDataToPlanishDataTwo(children, rest.key, level + 1));
  }, []);
}

console.log(treeDataToPlanishDataTwo(treeData), '>>>>>>>>>>');
/**
 * @desc: 扁平化转树形结构
 */

const planishDataToTreeData = (data, config) => {
  var idMap = {};
  var jsonTree = [];
  data.forEach(function (v) {
    idMap[v.key] = v;
  });
  data.forEach(function (v) {
    var parent = idMap[v.parentKey];
    if (parent) {
      parent.children = parent.children || [];
      parent.children.push(v);
    } else {
      jsonTree.push(v);
    }
  });
  return jsonTree;
};

console.log(JSON.stringify(planishDataToTreeData(treeDataToPlanishDataTwo(treeData))));
