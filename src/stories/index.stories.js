/*
 * @moduleName:
 * @Author: dawdler
 * @LastModifiedBy: dawdler
 * @Date: 2019-03-27 15:07:32
 * @LastEditTime: 2022-02-16 17:32:32
 */
import { storiesOf } from '@storybook/vue';
import { withKnobs, array, object } from '@storybook/addon-knobs';
import Vue from 'vue';
// 导入组件库
import ElementUI from 'element-ui';
import ElTreeSelect from '../components/src/ElTreeSelect.vue';
import 'element-ui/lib/theme-chalk/index.css';
// 注册组件库
Vue.use(ElementUI, {
    size: 'small'
});

let data = [];
const { label, children, parentId, value } = {
    children: 'child',
    label: 'name',
    disabled: 'disabled',
    value: 'testId'
};
for (let i = 0; i < 1000; i++) {
    let rootNode = {
        name: `节点：${i}`,
        parentId: i,
        testId: i,
        child: []
    };
    for (let a = 0; a < 5; a++) {
        let subId = `${rootNode[value]}_${a}`;
        let subNode = {
            [label]: `子节点：${subId}`,
            [parentId]: rootNode[value],
            [value]: subId,
            [children]: []
        };
        for (let b = 0; b < 5; b++) {
            let endId = `${subId}_${b}`;
            let endNode = {
                [label]: `末级节点：${endId}`,
                [parentId]: subNode[value],
                [value]: endId,
                [children]: []
            };
            subNode[children].push(endNode);
        }
        rootNode[children].push(subNode);
    };
    data.push(rootNode);
}

storiesOf('渲染', module)
    .addDecorator(withKnobs)
    .add('通过props传参数', () => ({
        components: { ElTreeSelect },
        template: `
        <el-row>
            <el-col :span="12">
            <ElTreeSelect v-model="values" :styles="styles" :selectParams="selectParams" :treeParams="treeParams" v-bind.sync="options" ref="treeSelect"></ElTreeSelect>
            </el-col>
            <el-col :span="12">
            当前选中数据ID：{{values}}
            </el-col>
        </el-row>
    `,
        props: {
            options: {
                type: Object,
                default: object('v-bind配置参数', { popoverClass: 'testClass' })
            },
            styles: {
                type: Object,
                default: object('调整样式：', { width: '500px' })
            },
            values: {
                type: [String, Array, Number],
                default: array('v-model配置：', ['0_0_0', '0_0_1'])
            },
            selectParams: {
                type: Object,
                default: object('input参数：', {
                    clearable: true,
                    placeholder: '请输入内容'
                })
            },
            treeParams: {
                type: Object,
                default() {
                    return {
                        'check-strictly': true,
                        'default-expand-all': true,
                        'expand-on-click-node': false,
                        height: 300,
                        clickParent: false,
                        filterable: true,
                        data: data,
                        props: {
                            children: 'child',
                            label: 'name',
                            disabled: 'disabled',
                            value: 'testId'
                        }
                    };
                }
            }
        }
    }));
