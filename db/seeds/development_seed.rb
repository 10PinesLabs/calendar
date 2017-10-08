
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
                       info: 'Proin blandit consequat tellus. Fusce hendrerit, erat non tincidunt vulputate, ipsum dui tempor enim, ac tristique turpis ligula at quam. Sed varius aliquam risus in posuere. Proin sodales risus nisl, in iaculis felis feugiat lacinia. Aliquam erat volutpat. Duis nisl turpis, vulputate eu turpis at, venenatis vehicula purus. Pellentesque nibh nisl, consequat sed ex ut, auctor dictum neque. Nam vel tellus non elit vehicula aliquet eu vel sem. Quisque gravida enim purus, non laoreet dui pellentesque aliquam. Etiam ac lobortis ex. Pellentesque commodo bibendum consectetur. Donec eu ligula nec lorem fringilla convallis quis sit amet neque. Fusce interdum finibus risus, a tempus mi tristique sed.',
                       user: users.first,
                       room: rooms.first,
                       from: DateTime.new(2017, 10, 10, 9).in_time_zone,
                       to: DateTime.new(2017, 10, 10, 11).in_time_zone,
                       metadata: Metadata.all },
                     { description: 'one Meeting on the blue',
                       info: 'Proin blandit consequat tellus. Fusce hendrerit, erat non tincidunt vulputate, ipsum dui tempor enim, ac tristique turpis ligula at quam. Sed varius aliquam risus in posuere. Proin sodales risus nisl, in iaculis felis feugiat lacinia. Aliquam erat volutpat. Duis nisl turpis, vulputate eu turpis at, venenatis vehicula purus. Pellentesque nibh nisl, consequat sed ex ut, auctor dictum neque. Nam vel tellus non elit vehicula aliquet eu vel sem. Quisque gravida enim purus, non laoreet dui pellentesque aliquam. Etiam ac lobortis ex. Pellentesque commodo bibendum consectetur. Donec eu ligula nec lorem fringilla convallis quis sit amet neque. Fusce interdum finibus risus, a tempus mi tristique sed.',
                       user: users.first,
                       room: rooms.last,
                       from: DateTime.new(2017, 10, 10, 16).in_time_zone,
                       to: DateTime.new(2017, 10, 10, 19).in_time_zone,
                       metadata: Metadata.all },
                     { description: 'another Meeting',
                       info: 'Sed rhoncus et risus non rhoncus. Donec sollicitudin faucibus maximus. Nulla facilisi. Curabitur sed mattis ex. Donec eget suscipit mauris. Maecenas tempor et mauris quis consectetur. Nullam posuere, nisl et aliquet tempor, nulla nibh sodales augue, sagittis laoreet felis nibh ut augue. Integer semper eleifend facilisis. Praesent gravida enim at arcu hendrerit egestas. Nullam nisl purus, mollis eget varius quis, porttitor vehicula orci. Nulla sapien enim, porttitor non lacus eu, placerat placerat risus. Mauris turpis leo, venenatis ac commodo ac, interdum vel mauris.',
                       user: users.first,
                       room: rooms.first,
                       from: DateTime.new(2017, 10, 11, 9).in_time_zone,
                       to: DateTime.new(2017, 10, 11, 11).in_time_zone }
                   ])
