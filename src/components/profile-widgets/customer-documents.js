import React from 'react';
import BoxedShadow from '../widget/boxed-shadow';
import DocumentViewer from './document-viewer';
import Status from './status';
import WidgetTitle from './widget-title';
import { workPermitData } from './data';
import { useTranslation } from 'react-i18next';

function CustomerDocuments() {
  const { t } = useTranslation();
  return (
    <>
      <BoxedShadow>
        <WidgetTitle
          title={t('customer_details.work_permit.title')}
          link={t('customer_details.work_permit.cta')}
          popupContent={<DocumentViewer />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-6">
          {workPermitData.map((item) => (
            <Status
              key={item.id}
              title={item.title}
              data={item.data}
              status={item.status}
            />
          ))}
        </div>
        <WidgetTitle
          className="mt-8"
          title={t('customer_details.passport.title')}
          link={t('customer_details.passport.cta')}
          popupContent={<DocumentViewer />}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {workPermitData.map((item) => (
            <Status
              key={item.id}
              title={item.title}
              data={item.data}
              status={item.status}
            />
          ))}
        </div>
        <WidgetTitle
          className="mt-8"
          title={t('customer_details.national_identity')}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-3">
          {workPermitData.map((item) => (
            <Status
              key={item.id}
              title={item.title}
              data={item.data}
              status={item.status}
            />
          ))}
        </div>
      </BoxedShadow>
    </>
  );
}

export default CustomerDocuments;
