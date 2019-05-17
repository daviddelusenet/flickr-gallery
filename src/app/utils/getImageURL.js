export default (farmID, ID, secret, serverID) => (
  `https://farm${farmID}.staticflickr.com/${serverID}/${ID}_${secret}_m.jpg`
);
