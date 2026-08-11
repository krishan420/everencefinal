
export const GoogleMap = ({ location = "Nagpur" }) => {
  // console.log(location);
  const mapUrls = {
    Nagpur: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.2823768251124!2d79.07545367401245!3d21.135485584106757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf33b07e2643%3A0x1b45df16c0e6fa96!2sSapalogy%20Training-%20IT%20ACCURATE!5e1!3m2!1sen!2sin!4v1753701604345!5m2!1sen!2sin",
    Thane: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2978.230824485533!2d72.9727232!3d19.1876259!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90d997fd167%3A0x5439eb8e12dbc517!2sIT%20Accurate%20%E2%80%93%20SAP%20%26%20Data%20Analytics%20in%20Thane!5e1!3m2!1sen!2sin!4v1753701734357!5m2!1sen!2sin"
  };

  return (
    <iframe
      key={location} 
      src={mapUrls[location]}
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title={`Google Maps - ${location}`}
    />
  );
};
