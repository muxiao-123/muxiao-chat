export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 你可以在这里自定义规则，例如限制 type 类型
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'ci',
        'build',
        'revert',
      ],
    ],
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking:
        '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      {
        value: 'feat',
        name: 'feat:     ✨ 新增功能',
        emoji: ':sparkles:',
      },
      {
        value: 'fix',
        name: 'fix:      🐛 修复缺陷',
        emoji: ':bug:',
      },
      {
        value: 'docs',
        name: 'docs:     📝 文档变更',
        emoji: ':memo:',
      },
      {
        value: 'style',
        name: 'style:    💄 代码格式',
        emoji: ':lipstick:',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️  代码重构',
        emoji: ':recycle:',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️ 性能优化',
        emoji: ':zap:',
      },
      {
        value: 'test',
        name: 'test:     ✅ 测试',
        emoji: ':white_check_mark:',
      },
      {
        value: 'chore',
        name: 'chore:    🔨 构建/工具变动',
        emoji: ':hammer:',
      },
      {
        value: 'ci',
        name: 'ci:       🎡 CI 配置',
        emoji: ':ferris_wheel:',
      },
      {
        value: 'build',
        name: 'build:    📦️ 构建系统',
        emoji: ':package:',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️ 回退',
        emoji: ':rewind:',
      },
    ],
    useEmoji: true,
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
  },
}
