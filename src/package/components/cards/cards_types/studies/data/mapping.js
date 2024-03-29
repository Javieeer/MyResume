import moment from 'moment';
import uuid from 'uuid/v4';

export const mapStudiesFromJsonResume = (jsonResume) => ({
    education: jsonResume?.education?.map((study) => ({
        ...study,
        // generating uuid for manipulating data if not present
        id: study.id || uuid(),
        startDate: study.startDate && moment(study.startDate),
        endDate: study.endDate && new Date(study.endDate).getFullYear()
    }))
});

export const mapStudiesToJsonResume = (data) => ({
    education: data.education?.map((study) => ({
        ...study,
        startDate: study.startDate?.format('YYYY-MM-DD'),
        endDate: study.endDate ? new Date(study.endDate, 1, 1) : null
    }))
});
