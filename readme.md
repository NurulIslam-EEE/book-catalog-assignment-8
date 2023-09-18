# Book Catalog Backend

## userProfile

<ul>
<li> https://book-catalog-assignment-8.vercel.app/api/v1/profile (Get) → Only for specific user (customer and admin)</li>
</ul>

## Users Route

 <ul>

<li>  https://book-catalog-assignment-8.vercel.app/api/v1/auth/signup (POST)</li>
<li>  https://book-catalog-assignment-8.vercel.app/api/v1/auth/login (GET)</li>
<li>  https://book-catalog-assignment-8.vercel.app/api/v1/users (GET) → Only Allowed For Admin</li>
<li>  https://book-catalog-assignment-8.vercel.app/api/v1/users/ff1e1f2d-5c0a-4d83-9897-9b4885d7b74a (PATCH)  → Only Allowed For Admin</li>
<li>  https://book-catalog-assignment-8.vercel.app/api/v1/users/ff1e1f2d-5c0a-4d83-9897-9b4885d7b74a ( DELETE)  → Only Allowed For Admin</li>
 </ul>

## Category Route

 <ul>

<li>   https://book-catalog-assignment-8.vercel.app/api/v1/categories/create-category (POST) → Only Allowed For Admin </li>
<li> https://book-catalog-assignment-8.vercel.app/api/v1/categories (GET)</li>
<li> https://book-catalog-assignment-8.vercel.app/api/v1/users/ef409eee-ef49-4607-9b2f-110705f33e2d (GET) </li>
<li> https://book-catalog-assignment-8.vercel.app/api/v1/categories/ef409eee-ef49-4607-9b2f-110705f33e2d (PATCH) → Only Allowed For Admin </li>
<li> https://book-catalog-assignment-8.vercel.app/api/v1/categories/ef409eee-ef49-4607-9b2f-110705f33e2d( DELETE) → Only Allowed For Admin </li>

 </ul>

## Books Route

 <ul>

<li>  https://book-catalog-assignment-8.vercel.app/api/v1/books/create-book (POST) → Only Allowed For Admin</li>
<li>https://book-catalog-assignment-8.vercel.app/api/v1/books (GET)</li>
<li>https://book-catalog-assignment-8.vercel.app/api/v1/books/3b679723-4961-4e36-8e60-3cc5bf6eda67 (GET)  </li>
<li>https://book-catalog-assignment-8.vercel.app/api/v1/books/3b679723-4961-4e36-8e60-3cc5bf6eda67 (PATCH)  → Only Allowed For Admin </li>

 </ul>

## Orders

 <ul>
 <li>https://book-catalog-assignment-8.vercel.app/api/v1/orders/create-order (POST)</li>
 <li>https://book-catalog-assignment-8.vercel.app/api/v1/orders (GET)</li>
 <li>https://book-catalog-assignment-8.vercel.app/api/v1/orders/:orderId (GET)</li>

 </ul>
