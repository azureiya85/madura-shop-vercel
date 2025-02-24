import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Epilogue, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Epilogue, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #7dc858
		'--color-primary-50': '236 247 230', // #ecf7e6
		'--color-primary-100': '229 244 222', // #e5f4de
		'--color-primary-200': '223 241 213', // #dff1d5
		'--color-primary-300': '203 233 188', // #cbe9bc
		'--color-primary-400': '164 217 138', // #a4d98a
		'--color-primary-500': '125 200 88', // #7dc858
		'--color-primary-600': '113 180 79', // #71b44f
		'--color-primary-700': '94 150 66', // #5e9642
		'--color-primary-800': '75 120 53', // #4b7835
		'--color-primary-900': '61 98 43', // #3d622b
		// secondary | #e8620b
		'--color-secondary-50': '252 231 218', // #fce7da
		'--color-secondary-100': '250 224 206', // #fae0ce
		'--color-secondary-200': '249 216 194', // #f9d8c2
		'--color-secondary-300': '246 192 157', // #f6c09d
		'--color-secondary-400': '239 145 84', // #ef9154
		'--color-secondary-500': '232 98 11', // #e8620b
		'--color-secondary-600': '209 88 10', // #d1580a
		'--color-secondary-700': '174 74 8', // #ae4a08
		'--color-secondary-800': '139 59 7', // #8b3b07
		'--color-secondary-900': '114 48 5', // #723005
		// tertiary | #cab974
		'--color-tertiary-50': '247 245 234', // #f7f5ea
		'--color-tertiary-100': '244 241 227', // #f4f1e3
		'--color-tertiary-200': '242 238 220', // #f2eedc
		'--color-tertiary-300': '234 227 199', // #eae3c7
		'--color-tertiary-400': '218 206 158', // #dace9e
		'--color-tertiary-500': '202 185 116', // #cab974
		'--color-tertiary-600': '182 167 104', // #b6a768
		'--color-tertiary-700': '152 139 87', // #988b57
		'--color-tertiary-800': '121 111 70', // #796f46
		'--color-tertiary-900': '99 91 57', // #635b39
		// success | #32af16
		'--color-success-50': '224 243 220', // #e0f3dc
		'--color-success-100': '214 239 208', // #d6efd0
		'--color-success-200': '204 235 197', // #ccebc5
		'--color-success-300': '173 223 162', // #addfa2
		'--color-success-400': '112 199 92', // #70c75c
		'--color-success-500': '50 175 22', // #32af16
		'--color-success-600': '45 158 20', // #2d9e14
		'--color-success-700': '38 131 17', // #268311
		'--color-success-800': '30 105 13', // #1e690d
		'--color-success-900': '25 86 11', // #19560b
		// warning | #ee03b9
		'--color-warning-50': '252 217 245', // #fcd9f5
		'--color-warning-100': '252 205 241', // #fccdf1
		'--color-warning-200': '251 192 238', // #fbc0ee
		'--color-warning-300': '248 154 227', // #f89ae3
		'--color-warning-400': '243 79 206', // #f34fce
		'--color-warning-500': '238 3 185', // #ee03b9
		'--color-warning-600': '214 3 167', // #d603a7
		'--color-warning-700': '179 2 139', // #b3028b
		'--color-warning-800': '143 2 111', // #8f026f
		'--color-warning-900': '117 1 91', // #75015b
		// error | #29e6f7
		'--color-error-50': '223 251 254', // #dffbfe
		'--color-error-100': '212 250 253', // #d4fafd
		'--color-error-200': '202 249 253', // #caf9fd
		'--color-error-300': '169 245 252', // #a9f5fc
		'--color-error-400': '105 238 249', // #69eef9
		'--color-error-500': '41 230 247', // #29e6f7
		'--color-error-600': '37 207 222', // #25cfde
		'--color-error-700': '31 173 185', // #1fadb9
		'--color-error-800': '25 138 148', // #198a94
		'--color-error-900': '20 113 121', // #147179
		// surface | #5f7f59
		'--color-surface-50': '231 236 230', // #e7ece6
		'--color-surface-100': '223 229 222', // #dfe5de
		'--color-surface-200': '215 223 214', // #d7dfd6
		'--color-surface-300': '191 204 189', // #bfccbd
		'--color-surface-400': '143 165 139', // #8fa58b
		'--color-surface-500': '95 127 89', // #5f7f59
		'--color-surface-600': '86 114 80', // #567250
		'--color-surface-700': '71 95 67', // #475f43
		'--color-surface-800': '57 76 53', // #394c35
		'--color-surface-900': '47 62 44' // #2f3e2c
	}
};
