# nextjs101
nextjs 14

## lecture : https://nomadcoders.co/nextjs-for-beginners

## step
`$ npm init`
`$ npm install react@latest next@latest react-dom@latest`

## run
package.json 의 script 변경
  "scripts": {
    "dev": "next dev"
  },

## directory
app/
ㄴ
ㄴabout-us/
ㄴlayout.tsx
ㄴnot-found.tsx
ㄴpage.tsx

## add folder/page.tsx == router
- nextjs 에서 app 폴더 이하의 폴더는.. url 이다...!!!!
- 단, 폴더 내에 page.tsx 파일이 있어야 한다

## use client
- pathname hook 사용 시 "use client" 추가...?
-- client component --> client side rendering
-- nextjs 는 build 시 server side rendering 이 default ..
--- 그래서 path 알아내기 위한 pathname hook 같은걸 사용하기 위해서는 client side rendering 해야.. ("use client" 를 붙인다고.. client 에서 render 되는건 아님. deafult 로 server render 된 상태임)
- "use client" 가 붙은 경우에만 javascript 를 front 로 전달..?

## hydrate
- == interactive
- 음.. javascript 동작을 html tag 에 적용? add? 하는 과정.
- 정확히는.. "use client" 를 사용하면, backend 에서 rendering 된 이후에 frontend 에서 hydrate 된다는 것을 의미.

## CSR, SSR


## 2.7 layout.tsx
- layout 은 중첩이 된다.
- 하위 url 에 전부 적용 된다.

## 2.8 Metadata
- route group
- (home) 처럼 괄호로 묶인 폴더는 url 생성하지 않음
-- 논리적으로 파일 분류(그룹화)할 때 사용하면 좋음

## 2.9 dynamic route
/movies:id --> <Movies/>


## 3.1 client side
## 3.2 server side
## 3.3 Loading Components
## 3.4 Parallel Requests