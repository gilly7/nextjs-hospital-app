export async function getStaticProps(context) {
  const { doctorId } = context.params;
  const doctorDetail = await fetchDoctorDetailsFromDatabase(doctorId);
  if (!doctorDetail) {
    return {
      notFound: true,
    };
  }
  return {
    props: doctorDetail,
    revalidate: 3600,
  };
}
