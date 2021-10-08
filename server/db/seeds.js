use doctors;
db.dropDatabase();
db.bookings.insert({doctor: "My Local Doctor",
                        first_name: "Dan",
                        last_name: "Callus",
                        date_time: 1633696276});