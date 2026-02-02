/**
 * Maps users to phone numbers.
 * In production, this should come from
 * environment variables or a database.
 */

const CONTACTS = {
  user1: process.env.USER1_PHONE,
  user2: process.env.USER2_PHONE,
  user3: process.env.USER3_PHONE,
  user4: process.env.USER4_PHONE,
  user5: process.env.USER5_PHONE,
  user6: process.env.USER6_PHONE,
  user7: process.env.USER7_PHONE,
  user8: process.env.USER8_PHONE,
  user9: process.env.USER9_PHONE,
  user10: process.env.USER10_PHONE
};

module.exports = CONTACTS;
