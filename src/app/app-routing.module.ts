import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostAddComponent } from './components/post-add/post-add.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UsersComponent } from './components/users/users.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { AdminGuard } from './services/guards/admin.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent, },
  {path: "work", component :WorkComponent},
  {path: "blog", component :BlogComponent},
  {path:"admin",component:LayoutAdminComponent, children:[
    {
      path: "product", children: [
        { path: "", redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: ProductsComponent },
        { path: "add", component: ProductAddComponent },
        { path: ":id", component: ProductDetailComponent },
        { path: "edit/:id", component: ProductAddComponent },
      ]
    },
    {
      path: "user", children: [
        { path: "", redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: UsersComponent },
        { path: "add", component: UserAddComponent },
        { path: "edit/:id", component: UserAddComponent },
      ]
    },
    {
      path: "post", children: [
        { path: "", redirectTo: 'list', pathMatch: 'full' },
        { path: 'list', component: PostsComponent },
        { path: "add", component: PostAddComponent },
        { path: ":id", component: PostDetailComponent },
        { path: "edit/:id", component: PostAddComponent },
      ]
    },
  ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
