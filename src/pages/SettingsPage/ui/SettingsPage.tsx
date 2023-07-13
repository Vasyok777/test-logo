import { useTranslation } from 'react-i18next'

const SettingsPage = () => {
	const { t } = useTranslation('settings')

	return <div>{t('Main')}</div>
}
export default SettingsPage
