# ElTree

## Props

<!-- @vuese:ElTree:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|data|-|`Array`|`false`|-|
|emptyText|-|`String`|`false`|-|
|renderAfterExpand|-|`Boolean`|`false`|true|
|nodeKey|-|`String`|`false`|-|
|checkStrictly|-|`Boolean`|`false`|-|
|defaultExpandAll|-|`Boolean`|`false`|-|
|expandOnClickNode|-|`Boolean`|`false`|true|
|checkOnClickNode|-|`Boolean`|`false`|-|
|checkDescendants|-|`Boolean`|`false`|false|
|autoExpandParent|-|`Boolean`|`false`|true|
|defaultCheckedKeys|-|`Array`|`false`|-|
|defaultExpandedKeys|-|`Array`|`false`|-|
|currentNodeKey|-|`String` /  `Number`|`false`|-|
|renderContent|-|`Function`|`false`|-|
|showCheckbox|-|`Boolean`|`false`|false|
|draggable|-|`Boolean`|`false`|false|
|allowDrag|-|`Function`|`false`|-|
|allowDrop|-|`Function`|`false`|-|
|props|-|—|`false`|{"children":"children","label":"label","disabled":"disabled"}|
|lazy|-|`Boolean`|`false`|false|
|highlightCurrent|-|`Boolean`|`false`|-|
|load|-|`Function`|`false`|-|
|filterNodeMethod|-|`Function`|`false`|-|
|accordion|-|`Boolean`|`false`|-|
|indent|-|`Number`|`false`|18|
|iconClass|-|`String`|`false`|-|
|height|-|`Number`|`false`|0|
|extraLine|-|`Number`|`false`|8|

<!-- @vuese:ElTree:props:end -->


## Events

<!-- @vuese:ElTree:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|node-expand|-|-|
|node-drag-start|-|-|
|node-drag-leave|-|-|
|node-drag-enter|-|-|
|node-drag-over|-|-|
|node-drag-end|-|-|
|node-drop|-|-|

<!-- @vuese:ElTree:events:end -->


## MixIns

<!-- @vuese:ElTree:mixIns:start -->
|MixIn|
|---|
|emitter|

<!-- @vuese:ElTree:mixIns:end -->


