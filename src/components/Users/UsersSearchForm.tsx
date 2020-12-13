import {ErrorMessage, Field, Form, Formik} from "formik"
import React from "react"
import {FilterType} from "../../Redux/reducers/usersReducer"
import {useSelector} from "react-redux";
import {getUsersFilterSelector} from "../../Redux/selectors/usersSelectors";

enum FieldsEnum {
    term = 'term',
    friend = 'friend'
}

type FriendUsersFormType = "true" | "false" | "null"

type FormType = {
    term: string,
    friend: FriendUsersFormType
}

type Props = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<Props> = React.memo(({onFilterChanged}) => {
    // const validate = (values: FilterType) => {
    //     const errors: any = {}
    //
    //     if (!values.term) {
    //         errors.term = 'Required'
    //     } else if (validator.isEmail(values.term)) {
    //         errors.term = 'Email is not supported'
    //     }
    //
    //     return errors
    // }

    const SubmitForm = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: JSON.parse(values.friend)
        }

        onFilterChanged(filter)

        setSubmitting(false)
    }

    const filter = useSelector(getUsersFilterSelector)

    const initialValuesOfForm = {
        [FieldsEnum.term]: filter.term,
        [FieldsEnum.friend]: JSON.stringify(filter.friend) as FriendUsersFormType
    }

    return (
        <div>
            <Formik
                initialValues={initialValuesOfForm}
                enableReinitialize
                onSubmit={SubmitForm}
                //validate={validate}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <Field type="text" name={FieldsEnum.term}/>
                            <ErrorMessage name={FieldsEnum.term} component="div"/>
                            <Field name={FieldsEnum.friend} as="select">
                                <option value={'null'}>All</option>
                                <option value={'true'}>Only followed</option>
                                <option value={'false'}>Only unfollowed</option>
                            </Field>

                            <div>
                                <button type="submit" disabled={isSubmitting}>
                                    Search
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
})

export default UsersSearchForm