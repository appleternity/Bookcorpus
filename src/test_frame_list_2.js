var frame_list = [
            {
                "lexical_unit": "mathematics.n / history.n / finance.n / field.n / math.n / literary.a / literature.n / theater.n / industrial.a / art.n / industry.n / area.n / sector.n / technical.a / in.prep / artistic.a",
                "definition": "An individual or group (Practitioner) or a part of their work life (Work) is defined professionally by the Activity that they typically engage in. Alternatively, the Activity may be indicated by a Salient_entity conventionally associated with it.  ' Chris was in the construction  industry for 20 years before coming to GSCM.'  'My career was in oil and gas.'",
                "tfidf": 6.533969530887697,
                "frame": "Fields"
            },
            {
                "lexical_unit": "timetable.n / itinerary.n / schedule.n / agenda.n",
                "definition": "A Timetable of Events is a mental object deliberately created, modified or kept by a Cognizer. The Timetable is often modified by an adjective depicting a Period_of_iterations or a dependent noun expressing the Events of the Timetable.  Note that this frame does not include the physical representation of a timetable.  '' As of now this frame does not have an inheritance relationship, but in the future a *Mental_object frame will be developed from which Timetable will inherit. ''  'Changes to an employee's work schedule should generally be approved prior to the change actually occuring.'  'The science students had very full timetables; these consisted mainly of lectures, with some lab sessions and problem classes or tutorials.'",
                "tfidf": 5.536606825289949,
                "frame": "Timetable"
            },
            {
                "lexical_unit": "amount.v / in amount.idio / number.v / total.n / total.a / total.v / tally.n",
                "definition": "The absolute Value of a quantifiable Attribute  of an item is determined by adding up the values for the Attribute of the individuals or parts that make up the item. The item is not expressed as a separate constituent but it is presupposed by the concept of Attribute.  Alternatively, the Numbers form an implicit set whose sum is the Value associated with the set.   In some cases what is reported is just the cardinality of the individuals that make up the item so that in effect the Value is a count. In other cases the identity of the Attribute can only be inferred from the Value.   There is no cognizer on the scene in this frame. Instead, the frame focuses on the relationship between the Attribute or Numbers and the Value, which is stable and unchanging regardless of who performs  the calculation.  'Defence is provided in West Germany by armed forces whose number totals close to half a million men and women ' . ' Revenues totalled 568.86m pounds ' 'The WHO estimated that the cumulative total of AIDS cases was more than 1,500,000. '",
                "tfidf": 4.988251847185258,
                "frame": "Amounting_to"
            },
            {
                "lexical_unit": "short.a / light [weight].a / high.a / thin.a / tall.a / broad.a / deep.a / long.a / heavy.a / narrow.a / big around.a / thick.a / low.a",
                "definition": "An Entity has a particular scalar Attribute with a value exceeding a contextually-specified or generally-understood standard. Except where there is a difference in FEs, we place all adjectives related to measurable quantities in this frame. Note that when an adjective appears with a quantity expression (e.g., 6 feet long), it belongs to the Dimension frame.  'That ladder is really tall.'  'After his back injury, he won't lift heavy boxes.'",
                "tfidf": 4.855038457578483,
                "frame": "Measurable_attributes"
            },
            {
                "lexical_unit": "stare.v / smell.v / taste.v / eye.v / squint.v / spy.v / listen.v / observation.n / stare.n / sniff.n / admire.v / look.v / savour.v / gaze.v / peek.v / view.v / sniff.v / glance.n / feel.v / peek.n / gape.v / gaze.n / glance.v / watch.v / look.n / gawk.v / peer.v / taste.n / attend.v / eavesdrop.v / peep.v / palpate.v / goggle.v",
                "definition": "This frame contains perception words whose perceivers intentionally direct their attention to some entity or phenomenon in order to have a perceptual experience.  For this reason we call the perceiver role in this frame Perceiver_agentive.    'She gazed upon him fondly.'  Comparing the Perception_active frame to the Perception_experience frame, we note that for some modalities there are different lexical items in each frame.  For instance, whereas Perception_active contains the verb phrase look at, Perception_experience contains see.   For other sense modalities, we find the same lexical item in both frames.  To illustrate, consider the verb smell.  This first sentence exemplifies the Perception_active use of the verb smell:'Smell this to see if it's fresh.CNI' This second sentence exemplifies its Perception_experience sense: 'I smell something rotten.'  ",
                "tfidf": 4.8332985320695325,
                "frame": "Perception_active"
            },
            {
                "lexical_unit": "quick.a / rapid.a / quickly.adv / take.v / slow.a / speedy.a / fast.a / slowly.adv / in.prep / gradually.adv / swift.a",
                "definition": "An Activity takes some Time_length to complete.  If an Agent is involved they may stand in metonymically for the Activity. For some LUs (e.g., fast, speedy) the Degree to which the Activity is conceived of as taking less time than usual can be expressed.  'How long will this take?'  'The ride was speedy and often bumpy.'  'Under high-pressure situations, police officers are very fast at reacting to danger.'",
                "tfidf": 4.4192886607731054,
                "frame": "Taking_time"
            },
            {
                "lexical_unit": "tenth.a / second.a / first.a / nineteenth.a / seventeenth.a / last.a / final.a / fifth.a / third.a / ninth.a / eighth.a / fourth.a / thirteenth.a / sixteenth.a",
                "definition": "An Item is picked out either by the order in which the members of a set would be encountered by an implicit cognizer, or by the order in which the members of a set participate in an event or state which serves as the Basis_of_order. The former case usually involves a Starting_point for going through the set, while the latter involves a Basis_of_order, which is normally an event that the Item along with other members of its Comparison_set has participated in.  Note that Item should be annotated on a second layer, except in cases when the noun structure the ordinal participates in is predicative.  'The first car from the left is a Magosix.' 'The first car from the left is a Magosix.' 'Barney was only the second Asian student at my college.' 'Felix was the first of my cats to realize that human food was tastier.' 'Felix was the first of my cats to realize that human food was tastier.'",
                "tfidf": 4.302126758386284,
                "frame": "Ordinal_numbers"
            },
            {
                "lexical_unit": "hunk.n / flake.n / board [computer].n / chunk.n / shred.n / clod.n / shard.n / chip.n / clump.n / snippet.n / sliver.n / morsel.n / scrap.n / smidgen.n / slice.n / fragment.n / piece.n / lump.n",
                "definition": "This frame is concerned with transparent nouns denoting a Piece of a Substance. Also present is Piece_prop which is a property of the Piece, e.g. relating to its size.  'Kim ate a tiny morsel of cake '.  ",
                "tfidf": 3.772669578251393,
                "frame": "Part_piece"
            },
            {
                "lexical_unit": "memory.n / forget.v / remember.v / recall.v / reminisce.v / look back.v",
                "definition": "A Cognizer calls up an episodic memory of past Experience or an Impression of a Salient_entity formed  on the basis of past experience. The Cognizer may also remember  the Salient_entity in a particular State, which serves as a frame of reference in the Cognizer's mind.   When attention is focused on a Salient_entity, then mention of a global Experience is excluded and typically, but not always, either a State or Impression of the Salient_entity is presented.  '' Episodic memory is the  explicit memory of events. It includes time, place, and associated emotions (which affect the quality of the memorization). Episodic memory contrasts and interacts with semantic memory, the memory of facts and concepts. The Remembering_information frame is concerned with this latter type of memory.   'Kozmo could remember when his modem was the fastest he could buy.'  'That's probably before my time, which was long time ago, Fish may remember that time.'  'Who remembers me being a total dork and going up to everyone saying \"Hey, I'm Ashley Hunt from Chicago\"!?!'   ' I wanted to remember how good that felt.'  'Hummel says staff, both students and professional, remember  her as a \"very good friend, available for new staff and well-respected by everyone.\"'   'Somehow I remember him as older, with long eyelashes, and doe eyes.'  'When he died he was just a kid himself but for some reason at the age of 44 I still remember him as older than me. '  'Retro games are great, but a lot of the time people get clouded by nostalgia and remember them to be better than they really were'  'He remembered him as a kindly man but not a very lively one. '  'The part I vividly remember was about a South Seas tramp steamer captain . '",
                "tfidf": 3.4603572453001816,
                "frame": "Remembering_experience"
            },
            {
                "lexical_unit": "variable.n / dependence.n / dictate.v / hinge.v / hang (on).v / determine.v / turn.v / dependent.a / factor.n / depends.v / depend.v / function.n / independent.a / independence.n",
                "definition": "The answer to one open question, the Outcome, is dictated (partially or completely) by the answer to another open question, the Determinant, i.e. if the answer to the Determinant is known, the answer to the Outcome can be predicted.  The Degree of predictive power and the Circumstances under which the dependency holds can also be expressed.  'Economic policy is partially a function of cultural values.' 'Well, that depends ... DNI' 'In Mediaeval times, status was dependent on birth.' ",
                "tfidf": 3.4315932361817465,
                "frame": "Contingency"
            },
            {
                "lexical_unit": "give shit.v / berate.v / chastisement.n / chide.v / admonition.n / reprove.v / castigation.n / scold.v / compliment.v / admonish.v / reprimand.v / reprimand.n / tell off.v / reproach.v / jeer.n / take to task.v / reproof.n / chastise.v / harangue.v / rebuke.n / congratulate.v / talking-to.n / thank.v / compliment.n / upbraid.v / tongue-lashing.n / thanks.n / jeer.v / telling off.n / castigatory.a / admonishment.n / rebuke.v",
                "definition": "In this frame, a Communicator judges the Addressee and then communicates that appraisal directly to the Addressee. The judgment is given for a particular Reason or about a particular Topic.  'The principal rebuked the student for cheating on the exam.'",
                "tfidf": 3.386176394462714,
                "frame": "Judgment_direct_address"
            },
            {
                "lexical_unit": "front.n / front.v / blind.n",
                "definition": "An individual or organization, the Front, serves as a cover for an Illicit_activity or an Illicit_organization.  'The laundromat is a front for the Yakuza.'",
                "tfidf": 3.315971600541944,
                "frame": "Front_for"
            },
            {
                "lexical_unit": "life.n / put away.v / imprisonment.n / incarcerate.v / jail.v / time.n / imprison.v / incarceration.n",
                "definition": "The Authorities put a Prisoner in Prison as punishment for an Offense.   'US Drug Researcher Imprisoned for FDA Fraud.' 'Men will be more likely to be put away for murder rather than manslaughter for killing their wives.' 'However, any treatments may be years in the future and in the meantime, criminals will continue to be imprisoned for public safety.'  'The government wrongfully imprisoned them in ?detention centers? (a nice term for concentration camps), tortured them mentally and physically' ",
                "tfidf": 3.0953098569737483,
                "frame": "Imprisonment"
            },
            {
                "lexical_unit": "bruise.v / sprain.v / injury.n / smack.v / stub.v / hurt.v / sunburn.v / jam.v / scrape.v / break.v / injure.v / strain.v / tear.v / pull.v / hit.v / graze.v / abrade.v / cut.v / twist.v / burn.v",
                "definition": "An Experiencer is involved in a bodily injury to a Body_part.  (In some cases, no Body_part need be indicated.)  Often an Injuring_entity on which the Experiencer injures themselves is mentioned. 'I think that I hurt myself pretty bad back there.' 'He smacked his head on the mantel getting up from poking at the fire.'",
                "tfidf": 2.9461362631181083,
                "frame": "Experience_bodily_harm"
            },
            {
                "lexical_unit": "five.num / couple.n / six.num / two hundred.num / dual.a / score.n / ninety.num / five hundred.num / fifty.num / ten.num / pair.n / hundred.num / fifteen.num / seven.num / twenty-seven.num / million.num / one.num / two.num / thousand.num / seventy.num / forty.num / number.n / nine.num / billion.num / three.num / seventy-four.num / brace.n / thirty.num / zero.num / twenty.num / sixty.num / twenty-one.num / fourteen.n / fifty-two.num / twelve.num / twenty-five.num / four.num / eight.num",
                "definition": "This frame presents a situation where there is a certain Number of instances of an Entity or a certain Number that quantifies a Unit. Numbers are used to count any kind of Entity that has distinct individuals, or alternatively, to count Units whose own function is to quantify some property, with the Number associated with each word of this frame differentiating groups, individuals, parts of individual Entitys of different sizes, or to differentiate the quantity of the Units. A countable Entity prototypically occupies its own space separately from other instances of the Entity, and each instance of the Entity has specific kinds of parts or substance or characteristics as specified by the kind of Entity it is described as.   Units (e.g., hours, inches, dozens) have the function of quantifying some property and as a result, naturally occur with a Number to say how the current property compares to the standard quantification of the Unit.  Less prototypical numbers, which occur much more frequently with Units rather than Entitys, describe situations with less than a whole Unitor Entity (half.n), or the lack of a Unit or Entity (zero.num). '' There is also a Precision associated with the Number. In most cases, there is a certain amount of imprecision in the Number that is assumed, especially for so-called \"round\" numbers like twenty.num or hundred.num, and for the class of approximate numbers, like couple.n; for other numbers, e.g. two.num, the expected precision is very high. Separately from this inherent possibility of precision or imprecision, numbers may be modified by an explicit specification of their Precision, with phrases like \"about\", etc.   'Only two senators voted in support of the president .' 'Dr. Malik has confined almost a score of such unfortunates in his basement, you know.' 'We endured forty days of snow .' 'There were thirty of the little blue creatures staring up at him.' 'She had only two pieces of Halloween candy left, but I still had ten! DNI' 'The ship was three degrees off course .'  '' This frame includes extrathematic FEs for a set of non-lexical constructions that put together quantifying expressions.  Firstly, a Number may itself be quantified by having a certain Multiplier, e.g. \"three hundred\".  Secondly, a sequence of numerical expressions may be strung together, with or without \"and\", to produce a Composite_number representing a Number that is the sum of the constituent numbers and that collectively modifies the Entity or Unit.  'Stephen has more than five hundred in his closet! DNI' '' '' As can be seen in the first of the next two examples, when the target is a number in front of another number in the function of a Multiplier, we consider the number it is modifying to be a Unit:  'There are just over six billion people in the world today.' 'There are just over six billion people in the world today.'  The relationship between numbers, as lexical units in this frame, and the broader category of numbers is a complex one.  In particular, there is a semiotic system that arranges the tiny set of numeral symbols (0, 1, 2 ... 9), with some additional symbols (commas, decimal points, fraction lines, scientific notation of exponents) to generate a standard representation for numbers that, while not universal, is at least language independent.  Our description of numbers is focused on the English system of numbers, as would occur in the spoken language or in pronunciations (actually decodings) of written numerals in English.  Since numerals are well-understood by virtually all speakers of most languages, and are well-processed by computers, we do not view the description of these structures in FrameNet as necessary.  As a convenience, we include numerals as wordforms when they coincide with a basic number word of English (e.g., \"3\" is a wordform of three.num). '' Of more interest for the FrameNet Project is the large number of idiosyncrasies in the constructions that use numbers, very few of which will be well-exemplified in our annotation.  These include indications of range (from ... to), approximation (in the neighborhood of), and descriptions of group properties (\"A whopping three singers showed up\")  ''  Technical note: The frame as currently devised does not distinguish between \"six apples\" and \"six of the apples\".  It is clear that in the first case, we are talking about six entities that fit whatever properties apples have.  In the second case, however, there is a specific set of apples that was already under discussion, and the six apples are members of this set.  There is a way of understanding this second case in terms of the first, namely, that \"six of the apples\" is interpreted as six entities with the property of being members of the given set of apples.  Since understanding the second case involves an additional notion of set membership, this could be indicated with a different FE than any we currently have in this frame, perhaps *Set, which is in an exclusion relation with Entity.  However, the major semantic distinction between these two types of Entity is whether there is a definite set, and this distinction is independently indicated by the definite article in examples like \"six of the apples\".   ",
                "tfidf": 2.8557496457872644,
                "frame": "Cardinal_numbers"
            },
            {
                "lexical_unit": "call up.v / telex.v / fax.v / write in.v / contact.v / cable.v / write.v / call in.v / ring up.v / e-mail.v / call.n / phone in.v / call.v / telegraph.v / page.v / get in touch.v / contact.n / phone.v / reach.v / mail.v / ring.v / get through.v / radio.v / telephone.v",
                "definition": "A Communicator (whose Location may be indicated) directs a Communication to an Addressee at a particular Address.  Note that no actual successful communicative act is implied, only the successful completion of acts which would establish the communication.  (In other words, Mari can e-mail Jon without Jon ever reading it.) NB:  The Address or Location_of_communicator may be a virtual address, such as an e-mail or telephone number.'Disgruntled voters phoned Congressman Neil at his Washington residence with complaints about the recent increases in corporate welfare.''She tried to call from the payphone down the street.' ",
                "tfidf": 2.7940097695090698,
                "frame": "Contacting"
            },
            {
                "lexical_unit": "school.v / schoolmistress.n / train.v / professor.n / tutor.n / student.n / teach.v / pupil.n / learn.v / educate.v / instruct.v / educational.a / instruction.n / training.n / cram.v / schoolteacher.n / protege.n / tutor.v / tutee.n / study.v / teacher.n / graduate.n / education.n / lecturer.n / coach.v / master.v / schoolmaster.n",
                "definition": "This frame contains words referring to teaching and the participants in teaching.  A Student comes to learn either about a Subject; a Skill; a Precept; or a Fact as a result of instruction by a Teacher.  Some of the nouns (schoolmaster, -mistress) in this frame refer to administrative positions and do not take relevant frame elements; these will be moved.    'Dad taught <fex name=\"\">me that if you work hard, you will be OK - no matter what happens. '  'What Our Cat  taught Me  About Marketing!'  'For two years she taught me French'  'Mom and Dad taught me not to bullshit, because it always came back to bite me in the ass, without fail. '  'A young swiss girl up in a swiss chalet taught me how to yodel.'  'Young Murdock later met a blind martial arts master known as Stick, who taught him how to use his augmented senses and trained him as a fighter.'  ' Maria, a woman studying to be a nun is sent from her convent to be the governess of the seven children of a widowed naval captain '  Frame-Element relations:  Several Frame element relations hold in this frame. There is a core-set {Material, Teacher} (possibly also including Institution); these FE's can fill the subject slot of the teach-type verbs. There is another core-set  {Precept, Subject, Skill, Fact, Role} to do with what is learnt. In addition, the FE Qualification may occur with Subject and Role  'My sister is studying for a maths degree    to be a teacher ' 'She's studying maths to be a teacher .'  Phrases expressing Qualification also very often include information about the Subject (see below), which is to be annotated on the second layer.  'Bill is studying for a BS in physics/a maths degree.' 'Bill is studying for a BS in physics/a maths degree.'  ",
                "tfidf": 2.772547048293525,
                "frame": "Education_teaching"
            },
            {
                "lexical_unit": "fit.v / take.v / seat.v / sleep.v / feed.v / serve.v",
                "definition": "An Entity has the ability to contain a Theme.  'Our facility seats up to 500 people.'",
                "tfidf": 2.7639842007227693,
                "frame": "Capacity"
            },
            {
                "lexical_unit": "spellbook.n / imprecation.n / sermon.n / tome.n / list.n / exemplum.n / epic.n / festschrift.n / volume.n / biography.n / eulogy.n / literature.n / manual.n / hagiography.n / lyric.n / paperback.n / treatise.n / whodunit.n / epic.a / manuscript.n / material.n / report.n / tragedy.n / editorial.n / autobiography.n / speech.n / meditation.n / bulletin.n / benediction.n / grimoire.n / newspaper.n / paper [newspaper].n / obituary.n / edition.n / textbook.n / monograph.n / journal.n / epistle.n / novelette.n / publication.n / elegy.n / pamphlet.n / memoir.n / brochure.n / ballad.n / essay.n / issue.n / article.n / thriller.n / record.n / trilogy.n / diary.n / epigram.n / handbook.n / novella.n / lay.n / fable.n / comedy.n / hardback.n / letter.n / drama.n / paper [article].n / poetry.n / history.n / fanzine.n / mag.n / chronicle.n / novel.n / tract.n / limerick.n / epilogue.n / writings.n / tetralogy.n / book.n / screenplay.n / ode.n / life.n / periodical.n / poem.n / magazine.n / song.n / booklet.n / saga.n / mystery.n / haiku.n / account.n / tractate.n / missive.n / rhyme.n / sonnet.n / fiction.n / script.n",
                "definition": "A Text is an entity that contains linguistic, symbolic information on a Topic, created by an Author at the Time_of_creation.  It may be a physical entity that is made of a certain Material etc.  It may be constructed for an Honoree.  'It was a good book.'",
                "tfidf": 2.600524939837167,
                "frame": "Text"
            },
            {
                "lexical_unit": "neophyte.n / launch (into).v / beginner.n / commence.v / begin.v / initiate.v / take up.v / enter.v / set about.v / open.v / get started.v / start.v / strike up.v / swing (into).v",
                "definition": "An Agent initiates the beginning of an ongoing Activity in which he will be continuously involved. '' 'At the same time, city-states began to grow in influence on the southern Greek mainland.'  'Naturally, I started crying to get out of work.'  ",
                "tfidf": 2.5892457638082638,
                "frame": "Activity_start"
            },
            {
                "lexical_unit": "peak.n / underside.n / right.n / right.a / summit.n / rear.a / top.a / east.a / tip.n / west.a / southern.a / left.n / hind.a / foot.n / bottom.n / north-south.n / northwest.n / bottom.a / front.a / east.n / south.n / west.n / front.n / western.a / northernmost.a / easternmost.a / north.n / westernmost.a / side.n / southernmost.a / back.a / eastern.a / northern.a / back.n / face.n / heart.n / base.n / south.a / top.n / rear.n / north.a / underbelly.n / left.a / apex.n / crest.n",
                "definition": "In this frame, there is a Part of a Whole in which the Part is defined with respect to the canonical or inherent orientation of the Whole. In cases where the Target is an adjective, it has a special relationship with the noun that it modifies such that a phrase which is a syntactic argument of the noun is semantically available to fill the argument structure of the adjective, as in   'the front  row of the class '  'The top  shelf of the bookcase was lying on the floor.'  'The bottom was missing.'  'My left  hand was numb.'  'He rested on the clifftop'   ",
                "tfidf": 2.4407921690405336,
                "frame": "Part_orientational"
            },
            {
                "lexical_unit": "conclude.v / infer.v / puzzle out.v / strike.v / deduction.n / surmise.v / determine.v / guess.v / find.v / realize.v / guess.n / figure out.v / ascertain.v / work out.v / conclusion.n / inference.n / gather.v / speculate.v / deduce.v / learn.v / realization.n",
                "definition": "A person (the Cognizer) comes to believe something (the Content), sometimes after a process of reasoning. This change in belief is usually initiated by a person or piece of Evidence. Occasionally words in this domain are accompanied by phrases expressing Topic, i.e. that which the mental Content is about.   'Based on the most recent census I have concluded that most Americans sleep too much.'     ",
                "tfidf": 2.4236160184925537,
                "frame": "Coming_to_believe"
            },
            {
                "lexical_unit": "wonderful.a / outstanding.a / utility.n / great.a / splendid.a / superb.a / good.a / excellent.a / useful.a / effective.a / super.a / ideal.a / marvellous.a / work.v / ineffective.a / perfect.a / terrific.a / tremendous.a / value.n / strong.a / valuable.a / fantastic.a / fine.a",
                "definition": "An Entity aids in the successful completion of a Purpose.  Its Degree of utility may also be expressed. Some of the lexical units  in this frame (e.g. great, good) can only express permanent, generic states of the Entity.  'A box is an ideal storage device.'",
                "tfidf": 2.3863752171315027,
                "frame": "Usefulness"
            },
            {
                "lexical_unit": "color.n / azure.a / orange.a / mauve.a / vermilion.a / yellow.a / colored.a / puce.a / white.a / blue.a / red.a / pitchblack.a / tan.a / buff.a / black.a / scarlet.a / beige.a / gray.a / indigo.a / turquoise.a / crimson.a / green.a / brown.a / maroon.a / ebony.a / purple.a / violet.a / pink.a",
                "definition": "A Color serves as a landmark in color-space, either a point-like landmark (e.g. burnt sienna) or a broader region (e.g. blue).  Especially when the Color designates a broad region in color-space, it may be defined with a specific Type, further specified by comparison to the color of a Comparand, modified by a Color_qualifier, or evaluated with a Descriptor.  All color words are generally used to specify the color of some (physical) Entity. 'I really like that shade of blue.' 'The welts on his side had already turned an angry red.' 'The room was bathed in a soft pink light.' 'They promptly set up a zillion bright vermilion pavilions.' 'His face and hands were brown from a life spent in the bright sun of the fields.' ",
                "tfidf": 2.28258693376223,
                "frame": "Color"
            },
            {
                "lexical_unit": "territorial.a / federal.a / multinational.a / locality.n / national.a / empire.n / territory.n / town.n / kingdom.n / internationally.adv / city-state.n / state [internal].n / barony.n / viscountcy.n / county.n / district.n / land.n / global.a / international.a / local.a / realm.n / megalopolis.n / principality.n / fiefdom.n / city.n / parish.n / world.n / jurisdiction.n / state [sovereign].n / diocese.n / country.n / village.n / township.n / duchy.n / metropolis.n / borough.n / municipal.a / nation.n / commonwealth.n / provincial.a / municipality.n / province.n",
                "definition": "This frame covers words that name Locations as defined politically, or administratively.  'Berkeley is a wonderful city.'",
                "tfidf": 2.1297389047886948,
                "frame": "Political_locales"
            },
            {
                "lexical_unit": "motivation.n / motive.n / basis.n / why.n / reason.n",
                "definition": "A volitional  Agent is responding to a State_of_affairs by performing some Action.  'And was that your reason for becoming an actor ?' 'But Giles is the reason that I am here .' 'Oh my reason for including it was Section fifty four A.'  ",
                "tfidf": 2.108437187260303,
                "frame": "Reason"
            },
            {
                "lexical_unit": "locate.v / encounter.v / perceive.v / chance (across).v / discovery.n / find (oneself).v / espy.v / spy out.v / come (upon).v / find out.v / detect.v / pick up.v / fall (on).v / observe.v / happen (on).v / learn.v / come (across).v / spot.v / notice.v / register.v / tell.v / discern.v / note.v / descry.v / chance (on).v / discover.v / find.v / recognize.v",
                "definition": "Words in this frame have to do with a Cognizer adding some Phenomenon to their model of the world. They are similar to Coming-to-believe words, except the latter generally involve reasoning from Evidence.  '' The words in this frame take direct objects that denote entities in the world, and indicate awareness of those entities, without necessarily giving any information about the content of the Cognizer's belief or knowledge. These words also resemble perception words, since creatures often become aware of things by perceiving them.  'Later that night, they found the barely-alive victim inside the Red Hall estate flat.'  'Almost immediately, the police discovered the wrought-iron crypt gate swinging open.'  'In the bag on the tableI could vaguelydiscern two bottles of wine and several cartons of cakes and other goodies.'  'People passing through recognize it from afar, by the clouds of coal dust darkening the air.'   General Grammatical Observations: Passive forms of the verbs in this frame can occur with extraposed clauses expressing Phenomenon: 'That year it was discovered that consumers preferred the older model.' 'It is not always recognized how much work goes into a dinner party.'",
                "tfidf": 2.0729581276667157,
                "frame": "Becoming_aware"
            },
            {
                "lexical_unit": "hedge.n / port.n / green.n / mine.n / range.n / silo.n / shop.n / reactor.n / development.n / zoo.n / plant.n / ranch.n / boutique.n / depot.n / field.n / urban.a / settlement.n / station.n / city.n / court.n / university.n / garden.n / theater.n / country.n / airfield.n / lab.n / bathhouse.n / rural.a / institute.n / square.n / factory.n / downtown.n / countryside.n / compound.n / gallery.n / college.n / installation.n / center.n / museum.n / post office.n / site.n / cemetery.n / campus.n / harbor.n / farm.n / courtyard.n / restaurant.n / plantation.n / school.n / safe house.n / open space.a / parking lot.n / complex.n / park.n / firehouse.n / village.n / park[2].n / headquarters.n / facility.n / canal.n / work.n / pub.n / laboratory.n / base.n",
                "definition": "Geography as defined by its use.   'You must land in the next airfield, as this one is currently having difficulties.' 'The new sports complex was the tallest building on campus, oddly enough.' 'Cities of the Northeast tend to be dingier.'",
                "tfidf": 1.9800738331894303,
                "frame": "Locale_by_use"
            },
            {
                "lexical_unit": "contemplation.n / wonder.v / thought.n / dwell.v / mull over.v / consideration.n / contemplate.v / reflection.n / deliberation.n / meditation.n / consider.v / think.v / muse.v / brood.v / reflect.v / ruminate.v / meditate.v / ponder.v / give thought.idio / deliberate.v",
                "definition": "A person, the Cognizer, thinks about a Topic over a period of time. What is thought about may be a course of action that the person might take, or something more general.  'The men were silently mulling over the proposition of committing an assassination'",
                "tfidf": 1.9667647530004448,
                "frame": "Cogitation"
            },
            {
                "lexical_unit": "multiplicity.n / army.n / book.n / coterie.n / claque.n / class.n / quartet.n / crew.n / assortment.n / swarm.n / circle.n / herd.n / party.n / body.n / trio.n / corps.n / collection.n / legion.n / slew.n / force.n / bunch.n / group.n / population.n / crowd.n / horde.n / bevy.n / passel.n / band.n / pack.n / combination.n / stand.n / cluster.n / variety.n / gaggle.n / package.n / squad.n / multitude.n / team.n / throng.n / quintet.n / repertory.n / huddle.n / flotilla.n / assembly.n / tribe.n / sextet.n / repertoire.n / assemblage.n / clump.n / family.n / community.n / shoal.n / heap.n / set.n / crop.n / school.n / host.n / posse.n / brood.n / flock.n / gang.n / cohort.n / colony.n / clutch.n / batch.n / mob.n / covey.n / clique.n / harem.n",
                "definition": "This frame contains nouns denoting Aggregates of Individuals.  The Aggregates may be described by an Aggregate_property.   'An army of postal workers descended on my office.'  ",
                "tfidf": 1.8277758481012847,
                "frame": "Aggregate"
            }
        ];