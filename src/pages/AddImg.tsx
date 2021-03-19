import { Button } from '@material-ui/core';
import {TextField } from 'formik-material-ui';
import Box from '@material-ui/core/Box';
import { Field, Form, Formik } from 'formik';
import {LocalImgService} from '../services/LocalImgService'

/** Partial of UnSplashImg */
export interface IAddFourm {
  //id: string,
  authorName: string,
  //created: string,
  title: string,
  //altTitle: string,
  description: string,
  //alt_description: string,
  authorImgUrl: string,
  imgUrl: string,
  imgLink: string,
  //likes: number,
  authorBio: string,
  portfolio_url: string,
  //downloadLink: string,
}

interface IFormField {
  name: string
  type: string
  label: string
  helpertext: string
}

export function AddImg() {
  const initVals: IAddFourm = {
    authorName: '',
    title: '',
    description: '',
    authorImgUrl: '',
    imgUrl: '',
    imgLink: '',
    authorBio: '',
    portfolio_url: '',
  }

  const formTextFeilds:IFormField[] = [
    {
      name: 'authorName',
      type: 'text',
      label: 'Name',
      helpertext: 'Your name'
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      helpertext: 'Img title'
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      helpertext: 'Img description'
    },
    {
      name: 'authorBio',
      type: 'text',
      label: 'About You',
      helpertext: 'Tell us your life story'
    },
    {
      name: 'authorImgUrl',
      type: 'url',
      label: 'Profile Img',
      helpertext: 'Profile img URL'
    },
    {
      name: 'imgUrl',
      type: 'url',
      label: 'Img',
      helpertext: 'Img URL'
    },
    {
      name: 'imgLink',
      type: 'url',
      label: 'Img Hyperlink',
      helpertext: 'Hyperlink to original img'
    },
    {
      name: 'portfolio_url',
      type: 'url',
      label: 'Your Link',
      helpertext: 'Hyperlink for more info about you'
    },
  ]

  function validateForm(values: IAddFourm){
    const errors:Partial<IAddFourm> = {}

    // TODO: figure out how to loop though k,v of interface
    if(!values.authorName || values.authorName.length > 200){errors.authorName = 'Required'}
    if(!values.title || values.title.length > 200){errors.title = 'Required'}
    if(!values.description || values.description.length > 200){errors.description = 'Required'}
    if(!values.authorImgUrl || values.authorImgUrl.length > 200){errors.authorImgUrl = 'Required'}
    if(!values.imgUrl || values.imgUrl.length > 200){errors.imgUrl = 'Required'}
    if(!values.imgLink || values.imgLink.length > 200){errors.imgLink = 'Required'}
    if(!values.authorBio || values.authorBio.length > 200){errors.authorBio = 'Required'}
    if(!values.portfolio_url || values.portfolio_url.length > 200){errors.portfolio_url = 'Required'}
  
    return errors
  }

  async function submitForm(values: IAddFourm):Promise<void> {
    await LocalImgService.put1(values)
    alert('Img Saved')
  }

  function getForms(): JSX.Element[] {
   return (
    formTextFeilds.map(x => (
      <Box margin={1} key={`box ${x.name}`}>
        <Field
          key={`field ${x.name}`}
          variant="outlined"
          component={TextField}
          name={x.name}
          type={x.type}
          label={x.label}
          helperText={x.helpertext}
        />
      </Box>
    ))
   )
  }

  return(
    <section>
    <Formik
      initialValues={initVals}
      validate={validateForm}
      onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          submitForm(values)
        }, 2000);
      }}
    >
      {({submitForm, isSubmitting, touched, errors}) => (
      <Form>
        {getForms()}
        <Box margin={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={submitForm}
          >
            Submit
          </Button>
        </Box>
      </Form>
      )}
    </Formik>
    </section>
  )
}
