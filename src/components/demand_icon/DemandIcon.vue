<!-- <template>
  <el-Icon>
    <component :is="iconComponent" />
  </el-Icon>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'
import * as ElementPlusIcons from '@element-plus/icons-vue'

import { toPascalCase } from '@/utils/format_string'

const props = defineProps({
  iconName: {
    type: String,
    required: true
  }
})

type IconName = 'Edit' | 'Delete' | 'Search' // 根据
const pascalCaseName = toPascalCase(props.iconName) as IconName
// const iconComponentPath = `element-plus/lib/icons/${pascalCaseName}`

const component = defineAsyncComponent(() => ElementPlusIcons[pascalCaseName])

const iconComponent = computed(() => component)
</script>

<style scoped></style> -->
