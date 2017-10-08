
users = User.create([
                      { first_name: 'Raul', last_name: 'Perez', avatar: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png' },
                      { first_name: 'Ricardo', last_name: 'Lopez', avatar: 'https://pickaface.net/gallery/avatar/unr_sample_170130_2257_9qgawp.png' }
                    ])

rooms = Room.create([
                      { name: 'Red', description: 'a red room' },
                      { name: 'Blue', description: 'a blue room' }
                    ])

Reservation.create([
                     { description: 'one Meeting',
                       user: users.first,
                       room: rooms.first,
                       from: DateTime.new(2017, 10, 10, 9),
                       to: DateTime.new(2017, 10, 10, 11),
                       metadata: Metadata.all },
                     { description: 'another Meeting',
                       user: users.first,
                       room: rooms.first,
                       from: DateTime.new(2017, 10, 11, 9),
                       to: DateTime.new(2017, 10, 11, 11) }
                   ])
