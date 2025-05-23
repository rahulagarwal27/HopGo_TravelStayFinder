const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.rendernewform = (req, res) => {
  // console.log(req.user);
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    // .populate("reviews")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
  // let result = listingSchema.validate(req.body);
  // console.log(result);

  // if(result.error){
  //   throw new ExpressError(400, result.error);
  // }

  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url, "..", filename);

  let response = await geocodingClient
    .forwardGeocode({
      // query: "New Delhi, India",
      query: req.body.listing.location,
      limit: 1,
    })
    .send();
    // console.log(response.body.features[0].geometry);
    // res.send("Geocoding is possible");
    

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry =  response.body.features[0].geometry;

  let savedlisting =  await newListing.save();
  console.log(savedlisting);
  req.flash("success", "New Listing created!");

  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  let orginalImageUrl = listing.image.url;
  originalImageUrl = orginalImageUrl.replace(
    "/upload",
    "/upload/e_pixelate:20"
  );
  res.render("listings/edit.ejs", { listing, orginalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  // if(!req.body.listing){
  //   throw new ExpressError(400, "Send valid data for listing")
  // }
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect("/listings");
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  // res.redirect("/testlisting");
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
