import Publish from '../../admin-components/publish/publish'
import Edit from '../../admin-components/edit/edit'
//import CatalogNew from '../admin-components/catalog/catalognew'
//import CatalogList from '../admin-components/catalog/cataloglist'
//import CatalogEdit from '../admin-components/catalog/catalogedit'
import StarNew from '../../admin-components/star/starnew'
import StarList from '../../admin-components/star/starlist'
import StarEdit from '../../admin-components/star/staredit'
export default [{
  key: '发布博客',
  path: '/admin/blog/publish',
  component: Publish
}, {
  key: '编辑博客',
  path: '/admin/blog/edit/:id',
  component: Edit
}, {
  key: '分类列表',
  path: '/admin/catalog/list',
  component: null
}, {
  key: '创建分类',
  path: '/admin/catalog/new',
  component: null
}, {
  key: '编辑分类',
  path: '/admin/catalog/edit/:id',
  component: null
}, {
  key: '添加收藏',
  path: '/admin/collect/new',
  component: StarNew
}, {
  key: '收藏列表',
  path: '/admin/collect/list',
  component: StarList
}, {
  key: '编辑收藏',
  path: '/admin/collect/edit/:id',
  component: StarEdit
}]