<Formik
  initialValues={{
    title: "",
    body: "",
  }}
  validationSchema={validationSchema}
  onSubmit={handleAddPost}  
>
  {({ isSubmitting }) => (
    <Form>
      <div>
        <Field
          type="text"
          className="form-control mb-2"
          placeholder="Title"
          name="title"
        />
        <ErrorMessage
          name="title"
          component="div"
          className="text-danger"
        />
      </div>
      <div>
        <Field
          as="textarea"
          className="form-control mb-2"
          placeholder="Body"
          rows="4"
          name="body"
        />
        <ErrorMessage
          name="body"
          component="div"
          className="text-danger"
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
        disabled={isSubmitting}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Post
      </button>
    </Form>
  )}
</Formik>
