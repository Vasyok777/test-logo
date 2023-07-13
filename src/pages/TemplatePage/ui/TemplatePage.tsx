import { useTranslation } from 'react-i18next'

const TemplatePage = () => {
	const { t } = useTranslation('template')

	return <div>{t('Main')}</div>
}
export default TemplatePage
