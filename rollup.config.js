// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/tq.js',
    format: 'cjs'
  },
  plugins: [
    // resolve(),
    // babel({
    //   exclude: 'node_modules/**' // 只编译我们的源代码
    // }),
    typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' })
  ]
}
