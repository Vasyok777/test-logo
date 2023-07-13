import { useTranslation } from 'react-i18next'

const FunctionsPage = () => {
	const { t } = useTranslation('functions')

	return <div>{t('Main')}</div>
}
export default FunctionsPage
