import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index page', () => {
    it('renders "インデックス" text', () => {
        const wrapper = mount(Index)
        expect(wrapper.text()).toContain('いんでっくす')
    })
})