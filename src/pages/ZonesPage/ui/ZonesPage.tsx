import { useTranslation } from 'react-i18next'

const ZonesPage = () => {
	const { t } = useTranslation('zones')

	return <div>{t('Main')}</div>
}
export default ZonesPage
