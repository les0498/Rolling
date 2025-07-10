import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default defineConfig([
  globalIgnores([
    'dist/ ',
    'build/',
    'node_modules/',
    '.eslintrc.cjs',
    'npm-debug.log',
    'yarn-debug.log',
    'yarn-error.log',
    'public/',
    'coverage/',
    '.vscode/',
    '.idea/',
    '.DS_Store',
    '*.config.js',
    'package-lock.json',
  ]), // 규칙 예외 파일

  js.configs.recommended, // Js (권장옵션)
  react.configs.flat.recommended, // react (권장옵션)
  jsxA11y.flatConfigs.recommended, // 접근성 검사 (권장옵션)
  eslintConfigPrettier,
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    settings: {
      react: {
        // 현재 React 버전을 명시합니다.
        // 명시하지 않을 경우(기본값 'detect') React 라이브러리 전체를 불러오므로 린트 과정에서 속도가 느려질 수 있습니다.
        version: '19.1',
      },
      'import/resolver': {
        node: {
          paths: ['src'], // src에 절대경로 Resolve
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'], // 자동 확장자 처리
        },
      },
    },

    rules: {
      'simple-import-sort/imports': [
        //import 정렬
        'error',
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react', '^@?\\w'],
            // Internal packages.
            ['^(@|components)(/.*|$)'],
            // Side effect imports.
            ['^\\u0000'],
            // Parent imports. Put `..` last.
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports. Put same-folder imports and `.` last.
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports.
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      // "import/extensions": ["error", "ignorePackages"], //import시 패키지를 제외하고 확장자 사용 (import/resolver : 자동확장자 처리랑 충돌)
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'import/newline-after-import': 'error', // import 후 한 줄 띄우기
      'import/no-duplicates': 'error', // 중복 import 방지
      'no-restricted-imports': [
        // 절대경로 통일을 위해 ".*" 패턴 제한
        'error',
        {
          patterns: ['.*'],
        },
      ],
      'react/react-in-jsx-scope': 'off', // React 17+ 이상에서는 React import 불필요
      'react/prop-types': 'off', // Prop validation 오류 비활성화
      // 화살표 함수 스타일 제한 해제
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      // target="_blank" 사용시 보안 경고 비활성화
      'react/jsx-no-target-blank': 'off',

      // Fast Refresh 관련 설정
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 미사용 변수 규칙 설정 (for js, not for ts)
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_', // '_'로 시작하는 변수 무시
          argsIgnorePattern: '^_', // '_'로 시작하는 매개변수 무시
          ignoreRestSiblings: true, // 구조분해할당의 나머지 변수 무시
        },
      ],
      // 일치 연산자 강제 (==, != 대신 ===, !== 사용)
      eqeqeq: ['error', 'always'],
    },
  },
]);
