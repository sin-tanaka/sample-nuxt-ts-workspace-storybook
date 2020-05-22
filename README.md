# nuxt-ts-workspace-storybook

- nuxt.js
- typescript
- yarn workspace
- storybook

を使ったサンプルプロジェクト

## workspace

- packages
  - apps 本体
  - type 型定義 MVCのMみたくロジックはここに書いてもいいかも?
  - ui uiコンポーネント AtomicDesignでいうところのAMOぐらいまでロジックは分離する 基本的にStorybookも書く
  
## VuexStore

非同期処理は基本的にここに書く vuex-module-decorators使った結果、Vuexというより永続的でグローバルなインスタンスっていう感じになってるがあくまでVuexのMutation, Actionぐらいまでは遵守して使う getterはstateはClassと同じ感じで扱えば良さそう

### pages

asyncData, fetchでVuexStore呼び出すイメージ 基本的にデータは親から子の方向に流す emitはui辺りでのイベントハンドリング以外ではあまり使わないようにする

## 未着手

- 環境変数周り
- storyshot
- e2eテスト周り
- git-hook
- 単体テスト周り
  - storyshotでカバーできるならvue-test-utilは不要?
  - nuxtのディレクトリ制約けっこう厳しそうだけどテストファイルどこに置く?
