var frame_list = [
    {
        "lexical_unit": "skip.v / forgo.v / do without.v / refrain.v / abstinence.n / forbearing.a / go without.v / forbearance.n / forbear.v / abstention.n / abstain.v",
        "definition": "AForgoer decides not to partake in something ordinary that is otherwise Desirable.  'Chuck often skips lunch.'",
        "tfidf": 6.012868126975808,
        "frame": "Forgoing"
    },
    {
        "lexical_unit": "skim.v / devour.v / pore.v / reader.n / scan.v / peruse.v / perusal.n / read.v",
        "definition": "The Reader attends to a Text to process its information.  Sometimes a particular kind of Sought_phenomenon is sought in the Text. '' The metaphor which allows motion verbs plus \"through\" to express reading (e.g. \"went through the text\", \"slogging through the phonebook\", \"sped through the dialogue passages\") is considered to be productive, and thus should be annotated in the Motion frames.  The metaphor applies most productively to motion verbs that do not specify motor program and either specify no manner information at all (e.g. \"go\") or only specify the manner of motion in terms of difficulty and/or speed (\"slog\", \"speed\"), although other verbs with specific information (\"saunter\", \"swim\") may occur in more colorful usage.  'I read A Tale of Two Cities last night.' ",
        "tfidf": 4.751285773323377,
        "frame": "Reading_perception"
    },
    {
        "lexical_unit": "byzantine.a / simple.a / complex.a",
        "definition": "A System is perceived as complex depending on the intricacy of the interconnectivty of its parts or components. These individual parts or components do not function as frame elements in this frame, even though they are implied by its definition. A Dimension may also be defined which situates the System within a certain domain.  '' 'San Diego freeways are a complex array of poorly maintained roads.' ' Childrens' toys are simple to assemble.' 'The hierarchy is complexin structure.' 'The newly-discovered humanoid spoke a syntactically complex language.'",
        "tfidf": 4.310663958519675,
        "frame": "System_complexity"
    },
    {
        "lexical_unit": "Frenchwoman.n / foreigner.n / Greek.n / Turk.n / Californian.n / Indian [American].n / English.n / American.n / Kraut.n / New Yorker.n / englishwoman.n / Persian.n / Frenchman.n / german.n / Irish.n / Frenchy.n / Dubliner.n / italian.n / Brit.n / Iranian.n / American [N and S Am].n / Chicagoan.n / Mexican.n / ottoman.n / Denverite.n",
        "definition": "This frame contains  words for individuals, i.e. humans, with respect to their Origin. The Origin is generally incorporated, but may occasionally be specified separately.  The Person is conceived of as independent of other specific individuals with whom they have relationships and independent of their participation in any particular activity. They may have an Age, Descriptor, Persistent_characteristic, or Ethnicity.   'I'm a proud Brit.'",
        "tfidf": 4.084452603205132,
        "frame": "People_by_origin"
    },
    {
        "lexical_unit": "approve.v / greenlight.v / approval.n / permit.v / disallow.v / authorize.v / mandate.n / suffer.v / prohibition.n / the green light.n / outlaw.v / leave.n / the go ahead.n / sanction [allow].v / clear.v / restrict.v / prohibit.v / the okay.n / permission.n / okay.v / forbid.v / the go-ahead.n",
        "definition": "In this frame, an Authority allows a Protagonist to know (in some way) that they may or may not engage in an Action. For lexical units of this frame marked with the semantic type \"Negative\", e.g., authorize.v, the Authority has the power to tell the Protagonist not to do something, but does not do so. It is assumed that if the Protagonist engages in the Action without permission, then the Authority will punish the Protagonist in some way, at least with disapproval; if the Authority grants permission, however, the Authority is agreeing not to impose a punishment on the Protagonist for performing the Action.   'The police officer forbid me from turning around .' ' My mother okayed me to go to the movies with Simon . '   ' The teacher gave the children permission to eat their lunch outside. '  'The Church had sanctioned for recital after Mass a special prayer to St. Michael.'",
        "tfidf": 3.671146301512973,
        "frame": "Deny_or_grant_permission"
    },
    {
        "lexical_unit": "act.v / conduct.n / conduct.v / bearing.n / carry oneself.v / behave.v / manner.n / misbehave.v / act up.v / comportment.n / misbehavior.n / deportment.n / way.n / behavior.n / demeanor.n",
        "definition": "An Agent acts in a certain Manner either generally or under some particular Circumstances. The conduct may also be directed specifically towards an Affected_party.  ' He pledges to  conduct himself  with honesty and humility.' ' This year they have behaved themselves particularly impudently.' ' His appearance was as   immaculate as ever and his bearing  composed and dignified. '",
        "tfidf": 3.5981637509483773,
        "frame": "Conduct"
    },
    {
        "lexical_unit": "decision.n / determine.v / rule out.v / decide.v",
        "definition": "A Cognizer makes a Decision, which may be about an entity or a course of action.  How (and whether) this frame is distinct from Choosing is currently up for debate.  'Mo decided to quit the program.' ",
        "tfidf": 3.471094226546888,
        "frame": "Deciding"
    },
    {
        "lexical_unit": "do something about.v / resolve.v / deal.v / answer.n / work through.v / handle.v / get a handle.v / clear up.v / result.n / fix.v / address.v / correct.v / solve.v",
        "definition": "An Agent resolves an outstanding Problem by finding its solution, explanation, answer, etc.  Alternatively, some non-agentive Cause may resolve the Problem.  The Means, Degree, Time and Place may also be expressed.  'As it turns out, putting all of my eggs in one basket completely solved all of my problems.' 'Students finally worked through all of the difficult problems by working together.'",
        "tfidf": 3.053374118933521,
        "frame": "Resolve_problem"
    },
    {
        "lexical_unit": "hey.intj / excuse me.intj / buddy.n / boy.n / ma'am.n / dude.n / hello there.intj / miss.n / guy.n / bro.n / officer.n / yoohoo.intj / sir.n / kid.n / homes.n / pal.n",
        "definition": "This frame covers terms used to get someone's attention, including Interjections (e.g. hey, yo) and certain terms of address (Address_term), the latter of which may serve the function of attention getting.    'Hey.' 'Hey, boy.' 'Hey, boy, come over here now!'  ",
        "tfidf": 2.8784567070454257,
        "frame": "Attention_getting"
    },
    {
        "lexical_unit": "grimace.v / frown.v / smile.v / grin.v / pout.v / smirk.v / scowl.v",
        "definition": "An Agent makes a particular facial expression, generally in response to some Internal_cause (generally an emotional state).  Sometimes the Body_part involved in the expression is mentioned in lieu of the Agent.  'His eyes smile, but his lips do not.'",
        "tfidf": 2.8701473799098496,
        "frame": "Making_faces"
    },
    {
        "lexical_unit": "oil.n / ore.n / petroleum.n / chemical.n / mud.n / metal.n / atropine.n / juice.n / oxygen.n / water.n / cement.n / gas.n / aluminum.n / liquid.n / glass.n / sand.n / iron.n / uranium.n / calcium.n / plutonium.n / material.n / methane.n / paper.n / solid.n / fertilizer.n / yellowcake.n",
        "definition": "This frame concerns internally undifferentiated Substances.   'As their gut bacteria ferment cellulose , they generate methane gas , which escapes from the rear ends of the insects.'  ' The pipes are leaking noxious gas.'  'Some CH-47 \"Bombers\" were equipped to roll-out riot control gas or napalm onto Viet Cong bunker complexes from the rear cargo ramp.'",
        "tfidf": 2.807940658091131,
        "frame": "Substance"
    },
    {
        "lexical_unit": "squeeze.v / jiggle.v / wave.v / turn.v / vibrate.v / swirl.v / twirl.v / seesaw.v / roll.v / rock.v / rotate.v / spin.v / shake.v / juggle.v / wiggle.v / swing.v",
        "definition": "An Agent causes a Theme to move with respect to a certain Fixed_location, generally with a certain Periodicity, without undergoing unbounded translational motion or significant alteration of configuration/shape. 'Paul shook the remote control frantically.'",
        "tfidf": 2.6693276136979307,
        "frame": "Cause_to_move_in_place"
    },
    {
        "lexical_unit": "spellbook.n / imprecation.n / sermon.n / tome.n / list.n / exemplum.n / epic.n / festschrift.n / volume.n / biography.n / eulogy.n / literature.n / manual.n / hagiography.n / lyric.n / paperback.n / treatise.n / whodunit.n / epic.a / manuscript.n / material.n / report.n / tragedy.n / editorial.n / autobiography.n / speech.n / meditation.n / bulletin.n / benediction.n / grimoire.n / newspaper.n / paper [newspaper].n / obituary.n / edition.n / textbook.n / monograph.n / journal.n / epistle.n / novelette.n / publication.n / elegy.n / pamphlet.n / memoir.n / brochure.n / ballad.n / essay.n / issue.n / article.n / thriller.n / record.n / trilogy.n / diary.n / epigram.n / handbook.n / novella.n / lay.n / fable.n / comedy.n / hardback.n / letter.n / drama.n / paper [article].n / poetry.n / history.n / fanzine.n / mag.n / chronicle.n / novel.n / tract.n / limerick.n / epilogue.n / writings.n / tetralogy.n / book.n / screenplay.n / ode.n / life.n / periodical.n / poem.n / magazine.n / song.n / booklet.n / saga.n / mystery.n / haiku.n / account.n / tractate.n / missive.n / rhyme.n / sonnet.n / fiction.n / script.n",
        "definition": "A Text is an entity that contains linguistic, symbolic information on a Topic, created by an Author at the Time_of_creation.  It may be a physical entity that is made of a certain Material etc.  It may be constructed for an Honoree.  'It was a good book.'",
        "tfidf": 2.600524939837167,
        "frame": "Text"
    },
    {
        "lexical_unit": "come.v",
        "definition": "An Entity ends up in a Final_situation.   'I have come to appreciate good coffee .' 'We have come to expect three meals a day .' 'When the history of our times comes to be written , They Organized Themselves to Death will be the only possible epitaph . ' '' This frame should be compared to the more general Transition_to_a_state, which also includes changes to a Final_category and a Final_quality. '' This frame should be compared to Process_start and Activity_start.  Unlike Process_start's Process FE and Activity_start's Activity FE, the Final_situation need not be conceived of as an ongoing event.  Also, there is no emphasis on the temporal profiling in Transition_to_a_situation other than the before (where the Final_situation is not true) to the after (where the Final_situation is true).",
        "tfidf": 2.4332627072908215,
        "frame": "Transition_to_a_situation"
    },
    {
        "lexical_unit": "undead.a / live.v / lifeless.a / alive.a / deceased.a / life.n / late.a / undead.n / dirt nap.n / dead.a / nonliving.a / dead.n / living.a / living.n",
        "definition": "A Protagonist is in the dynamic, maintained state of being alive or has exited this state.  'Frank's dead body was apalling.'",
        "tfidf": 2.395890481124762,
        "frame": "Dead_or_alive"
    },
    {
        "lexical_unit": "aid [act].n / abet.v / help out.v / cater.v / help.n / aid [entity].n / succor.v / aid and abet.v / help.v / serve.v / helpful.a / aid.v / assist.v / assistance.n",
        "definition": "A Helper benefits a Benefited_party by enabling the culmination of a Goal that the Benefited_party has.  A Focal_entity that is involved in reaching the Goal may stand in for it.  This Frame has unique Frame-to-Frame Relations: it inherits from and uses the Intentionally_act frame. This is atypical of FrameNet's frame relations.  'Will you help the Government find your brother?' 'Maybe Stephen should assist him with the last manuscript.' 'They helped me psychologically to overcome the physical loss I had suffered.' 'You have helped him tremendously by showing him  how to stand up for himself and by being his friend.' 'By bringing assistance to his troops wherever they were in trouble he aided them greatly.'",
        "tfidf": 2.2947266883128408,
        "frame": "Assistance"
    },
    {
        "lexical_unit": "emperor.n / commander.n / principal.n / bishop.n / tsar.n / prince.n / chairman.n / mayor.n / sheik.n / governor.n / president.n / director.n / congresswoman.n / monarch.n / dr.n / headmaster.n / chairperson.n / child.n / minister.n / father.n / officer.n / general.n / kaiser.n / legislator.n / captain.n / superintendent.n / chief.n / mogul.n / shah.n / cousin.n / official.n / mr.n / ms.n / sultan.n / supervisor.n / sister.n / mrs.n / aunt.n / empress.n / uncle.n / congressman.n / maharaja.n / leader.n / duchess.n / executive.n / premier.n / doctor.n / miss.n / representative.n / secretary.n / brother.n / king.n / commissioner.n / imam.n / mother.n / queen.n",
        "definition": "This frame is only for words that are used as the Titles of individuals. The Title is applied to a Name (surname or full name) and often designates their rank within a man-made institution (e.g. chief, king, bishop, brother) or general social status (mr., miss), or may indicate a kinship relationship (cousin, aunt). Pairings of Title and Name can be used as vocatives (see Attention_getting), while the Titles may not always be vocative on their own.  'He saluted General Fightmeister walking into the room.' 'Everyone stood as Captain Jack Aubrey delivered a toast.' 'Supreme Court Chief Justice John Roberts is sticking to his guns .' 'Captain Mike Eruzione of the USA Miracle on Ice hockey team in 1980 turns 58 today.'  Most LUs of this frame are related to LUs of the Leadership or Kinship frames, but some (e.g. Lady, Mr., Brother) occur only here.  These LUs differ from normal examples of LUs in Leadership or Kinship in that the LUs are used simply as vocatives or as modifiers of names, to indicate how the individual fits into the general or specific social context.",
        "tfidf": 1.9959974011022878,
        "frame": "Appellations"
    },
    {
        "lexical_unit": "on.adv / go on.v / drag on.v / persistence.n / underway.a / persist.v / proceed.v / ongoing.a / continue.v",
        "definition": "An Event continues at a certain Place through Time.  (Note that often when 'continue.v' occurs with definite time points, it denotes Resumption, which is out of frame here.) NB:  Refer to Process frame. '' 'Pyongyang agreed to suspend its withdrawal while talks continued with Washington.'  'Missions and different plans proceed according to Islamic law provision.'",
        "tfidf": 1.9828175743019574,
        "frame": "Process_continue"
    },
    {
        "lexical_unit": "lack.n / possess.v / property.n / custody.n / possessor.n / assets.n / want.n / ownership.n / belongings.n / possession [of goods].n / got.v / wanting.a / have.v / belong.v / lacking.a / lack.v / possession.n / want.v / own.v / have got.v / owner.n / possession [definite noun].n / effects.n",
        "definition": "An Owner has (or lacks) a Possession. '' 'The river's part of my  manor, but of course it also belongs to the River Police.'  'It's a nuisance having to abandon my belongings, though.'",
        "tfidf": 1.9259570588542922,
        "frame": "Possession"
    },
    {
        "lexical_unit": "as long as.scon / provided.scon / if.scon / what if.scon / supposing.scon / in the event.prep / in case.scon / assuming.scon",
        "definition": "A Consequence is presented as occurring if the Profiled_possibility occurs.  See Conditional_scenario for further information.    'If you take too long , the train will leave without you .'",
        "tfidf": 1.8900888943448415,
        "frame": "Conditional_occurrence"
    },
    {
        "lexical_unit": "stepsister.n / ancestral.a / filial.a / kinsman.n / sister-in-law.n / sister.n / dad.n / brother-in-law.n / stepdaughter.n / son-in-law.n / parent.n / kinswoman.n / grandfather.n / kin.n / uncle.n / aunt.n / parental.a / in-law.n / forefather.n / stepmother.n / maternal.a / daughter-in-law.n / child.n / ancestor.n / son.n / grandmother.n / father.n / father-in-law.n / kid.n / clan.n / paternal.a / forebear.n / mother-in-law.n / name.n / stepbrother.n / kinsfolk.n / great-granddaughter.n / relative.n / cousin.n / stepson.n / scion.n / granddaughter.n / descendant.n / family.n / mom.n / grandson.n / niece.n / stepfather.n / people.n / daddy.n / kinship.n / brother.n / daughter.n / sibling.n / great-grandson.n / mother.n / nephew.n / offspring.n / auntie.n",
        "definition": "This frame contains words that denote Kinship relations. In annotating the directional uses of these words, we use the standard terms from anthropology, Ego and Alter.  'Matilde is Gilberto's cousin once removed' Compare to: Appellations.",
        "tfidf": 1.7518564097136549,
        "frame": "Kinship"
    },
    {
        "lexical_unit": "colossal.a / immense.a / Lilliputian.a / substantial.a / great.a / large.a / tiny.a / infinitesimal.a / Brobdingnagian.a / mid-size.a / humongous.a / gigantic.a / capacious.a / mini.a / ample.a / huge.a / jumbo.a / medium.a / medium-sized.a / grand.a / miniscule.a / immeasurable.a / petite.a / massive.a / big.a / bulky.a / sizable.a / small.a / puny.a / miniature.a / enormous.a / wee.a / voluminous.a / little.a / giant.a / bitty.a",
        "definition": "The size of an Entity is assessed in terms of the Degree by which it deviates from the norm. The size generally refers to the amount of three-dimensional space that is occupied by the Entity, not primarily to its weight, density, or length, which is why it is peculiar to refer to a bullet as \"large\", even if it is heavy, unless it actually has larger dimensions than usual, or to a rope as \"big\", even if it is long, unless its other, cross-sectional dimensions are also significant.  'I own a very small home.' 'Where is my little notebook?' 'That dog is huge!' ''  There are an enormous number of productive metaphors that involve this frame as the source domain; two of the most frequent metaphors come from the target domains of quantity/amount and importance.    'He gave me a small sum of money.' 'The novel was a substantial achievement.' ''  Subcases of the quantity/amount and importance metaphors are also prominent. These involve cases describing the extent of an action's, event's, or person's effect (\"his influence on her work was massive\"), as well as those related to events (\"big party\"), similarity (\"gigantic difference\"), communication (\"giant misunderstanding\"), and emotions (\"great joy\", \"little joys\").  Other productive metaphors include those dealing with groups (in terms of their number of members, net worth, importance to the economy, i.e. \"giant electronics company\") and those describing sound volume (\"in a tiny voice\", \"the enormous thundering of her heart\").  ''  The target domain of fame, by contrast, occurs in a non-productive metaphor, found especially with big.a and huge.a. Maturity and age also occur in non-productive metaphors (\"big boy\", \"little baby\").",
        "tfidf": 1.6184513195837744,
        "frame": "Size"
    },
    {
        "lexical_unit": "must.v / liable.a / chance.n / prone.a / certain.a / possibility.n / likely.adv / may.v / certainty.n / possibly.adv / can.v / probable.a / sure.a / might.v / undoubtedly.adv / would.v / improbability.n / likely.a / likelihood.n / possible.a / certainly.adv / probability.n / surely.adv / bound.a / probably.adv / impossible.a / tend.v / long.a / guaranteed.a / unlikely.a / assured.a",
        "definition": "This frame is concerned with the likelihood of a Hypothetical_event occurring. The Hypothetical_event is its only core frame element.  'It is likely that he'll arrive late.'  Notice that in the case where a noun phrase is the subject of the Support Verb, that NP is also tagged as Hypothetical_event.  'He is likely to arrive late.' ",
        "tfidf": 1.5555066950791974,
        "frame": "Likelihood"
    },
    {
        "lexical_unit": "kind of.adv / like.adv / sort of.adv / in a way.adv / rather.adv / a bit.n / something.n / on the side.a",
        "definition": "When words of this frame are used as hedge markers, they signal that the speaker of the sentence wishes to be careful about asserting some Hedged_content.  Use of a hedge marker may mean that the speaker is uncertain of how factual of the Hedged_content is, or uncertain of whether they're expressing the idea behind Hedged_content well, or it may mean that the Hedged_content is socially undesirable or awkward in the conversational context.   'The president is a bit of an idiot when it comes to foreign policy .' 'I 'm sorry , but he is on the heavy side , you understand .' 'I thought, like, maybe you would know .' 'My father was something of a dilettante .' 'He rather doubts you'll be able to convince your mom. ' '' Because these words serve to indicate hesitancy, often for purposes of increased politeness, speakers may use several encodings of hedging simultaneously to iconically indicate the degree of politeness or hesitancy that they wish to express:  'Your story, is, like, kind of a bit on the short side .' '' There is also an ironic or sarcastic use of LUs in this frame, as in the following:  'When a standard vaccuum can't even pick up the clods, you know you've kinda got a problem.' '' Words expressing small quantities or degrees (e.g., \"a tad\", \"a little\", etc.) can be used in a very similar function to words of this frame.  However, these words do not simply signify hesitation, but merely frequently imply it when used to modify a predication.  Such words can only be used on their on or with a noun to signify a small quantity or number (\"a little whiskey\", see Proportional_quantity), or with an adjective to indicate that the quality described by the adjective is close to average (\"a mite stupid\", \"somewhat confused\" see Degree).  Words of those frames may be nested within noun phrases or in other positions where content is not asserted but rather presupposed.  Words that belong to the Hedging frame, by contrast, either take a noun complement and indicate hesitancy or imprecision concerning the category (\"something of a klutz\"), or modify an entire proposition to indicate imprecision of the proposition (\"I, like, waved it around\").  In both cases, the Hedged_content must occur in the at-issue focus of a proposition, the part of a statement that the speaker is, so to speak, on record as asserting.",
        "tfidf": 1.4818616755291847,
        "frame": "Hedging"
    },
    {
        "lexical_unit": "five.num / couple.n / six.num / two hundred.num / dual.a / score.n / ninety.num / five hundred.num / fifty.num / ten.num / pair.n / hundred.num / fifteen.num / seven.num / twenty-seven.num / million.num / one.num / two.num / thousand.num / seventy.num / forty.num / number.n / nine.num / billion.num / three.num / seventy-four.num / brace.n / thirty.num / zero.num / twenty.num / sixty.num / twenty-one.num / fourteen.n / fifty-two.num / twelve.num / twenty-five.num / four.num / eight.num",
        "definition": "This frame presents a situation where there is a certain Number of instances of an Entity or a certain Number that quantifies a Unit. Numbers are used to count any kind of Entity that has distinct individuals, or alternatively, to count Units whose own function is to quantify some property, with the Number associated with each word of this frame differentiating groups, individuals, parts of individual Entitys of different sizes, or to differentiate the quantity of the Units. A countable Entity prototypically occupies its own space separately from other instances of the Entity, and each instance of the Entity has specific kinds of parts or substance or characteristics as specified by the kind of Entity it is described as.   Units (e.g., hours, inches, dozens) have the function of quantifying some property and as a result, naturally occur with a Number to say how the current property compares to the standard quantification of the Unit.  Less prototypical numbers, which occur much more frequently with Units rather than Entitys, describe situations with less than a whole Unitor Entity (half.n), or the lack of a Unit or Entity (zero.num). '' There is also a Precision associated with the Number. In most cases, there is a certain amount of imprecision in the Number that is assumed, especially for so-called \"round\" numbers like twenty.num or hundred.num, and for the class of approximate numbers, like couple.n; for other numbers, e.g. two.num, the expected precision is very high. Separately from this inherent possibility of precision or imprecision, numbers may be modified by an explicit specification of their Precision, with phrases like \"about\", etc.   'Only two senators voted in support of the president .' 'Dr. Malik has confined almost a score of such unfortunates in his basement, you know.' 'We endured forty days of snow .' 'There were thirty of the little blue creatures staring up at him.' 'She had only two pieces of Halloween candy left, but I still had ten! DNI' 'The ship was three degrees off course .'  '' This frame includes extrathematic FEs for a set of non-lexical constructions that put together quantifying expressions.  Firstly, a Number may itself be quantified by having a certain Multiplier, e.g. \"three hundred\".  Secondly, a sequence of numerical expressions may be strung together, with or without \"and\", to produce a Composite_number representing a Number that is the sum of the constituent numbers and that collectively modifies the Entity or Unit.  'Stephen has more than five hundred in his closet! DNI' '' '' As can be seen in the first of the next two examples, when the target is a number in front of another number in the function of a Multiplier, we consider the number it is modifying to be a Unit:  'There are just over six billion people in the world today.' 'There are just over six billion people in the world today.'  The relationship between numbers, as lexical units in this frame, and the broader category of numbers is a complex one.  In particular, there is a semiotic system that arranges the tiny set of numeral symbols (0, 1, 2 ... 9), with some additional symbols (commas, decimal points, fraction lines, scientific notation of exponents) to generate a standard representation for numbers that, while not universal, is at least language independent.  Our description of numbers is focused on the English system of numbers, as would occur in the spoken language or in pronunciations (actually decodings) of written numerals in English.  Since numerals are well-understood by virtually all speakers of most languages, and are well-processed by computers, we do not view the description of these structures in FrameNet as necessary.  As a convenience, we include numerals as wordforms when they coincide with a basic number word of English (e.g., \"3\" is a wordform of three.num). '' Of more interest for the FrameNet Project is the large number of idiosyncrasies in the constructions that use numbers, very few of which will be well-exemplified in our annotation.  These include indications of range (from ... to), approximation (in the neighborhood of), and descriptions of group properties (\"A whopping three singers showed up\")  ''  Technical note: The frame as currently devised does not distinguish between \"six apples\" and \"six of the apples\".  It is clear that in the first case, we are talking about six entities that fit whatever properties apples have.  In the second case, however, there is a specific set of apples that was already under discussion, and the six apples are members of this set.  There is a way of understanding this second case in terms of the first, namely, that \"six of the apples\" is interpreted as six entities with the property of being members of the given set of apples.  Since understanding the second case involves an additional notion of set membership, this could be indicated with a different FE than any we currently have in this frame, perhaps *Set, which is in an exclusion relation with Entity.  However, the major semantic distinction between these two types of Entity is whether there is a definite set, and this distinction is independently indicated by the definite article in examples like \"six of the apples\".   ",
        "tfidf": 1.4278748228936322,
        "frame": "Cardinal_numbers"
    },
    {
        "lexical_unit": "have.v / with.prep / have got.v",
        "definition": "A Topical_entity has properties which are affected by the existence and association of an Entity.  'By the 1920s a characteristic book had black and white photographic illustrations only .'  'Their schools had an improved and more balanced curriculum .'  'With dual citizenship , Stephen now had two presidents he hated .'",
        "tfidf": 1.4236504408934425,
        "frame": "Have_associated"
    },
    {
        "lexical_unit": "endow.v / donor.n / charity.n / bequeath.v / volunteer.v / give out.v / confer (upon).v / hand over.v / donation.n / contribute.v / hand out.v / give.v / gift.v / will.v / bequest.n / fob off.v / contribution.n / pass out.v / advance.v / donate.v / foist.v / treat.v / hand in.v / gift.n / leave.v / hand.v",
        "definition": "A Donor transfers a Theme from a Donor to a Recipient.  This frame includes only actions that are initiated by the Donor (the one that starts out owning the Theme).  Sentences (even metaphorical ones) must meet the following entailments: the  Donor first has possession of the Theme.  Following the transfer the Donor no longer has the Theme and the Recipient does. 'Barney gave the beer to Moe.' '$300 was endowed to the university to build a new performing arts building.'",
        "tfidf": 1.3341188048377426,
        "frame": "Giving"
    },
    {
        "lexical_unit": "of.prep / jamaican.a / come from.v / swiss.a / iranian.a / american.a / european.a / dutch.a / finnish.a / cuban.a / from.prep / byzantine.a / assyrian.a / saudi.a / russian.a / iraqi.a / french.a / origin.n / originate.v / egyptian.a / irish.a / portuguese.a / ottoman.a / vietnamese.a / jordanian.a / italian.a / syrian.a / date.v / indian.a / japanese.a / colombian.a / greek.a / roman.a / spanish.a / chinese.a / turkish.a / canadian.a / national.a",
        "definition": "An Entity began its existence in the context of a Origin, which can be a place,  culture, time period, text, etc.  'The Christian origin of this quote is from Isaiah 22.'  'Dinosaurs originated from Antarctica?'  ''",
        "tfidf": 1.3143689188314271,
        "frame": "Origin"
    },
    {
        "lexical_unit": "barely.adv / a good.a / close (to).a / approximately.adv / or so.adv / little.art / tops.n / most.art / about.prep / at least.adv / almost.prep / precisely.adv / under.prep / some.art / around.prep / exactly.adv / roughly.adv / over.prep / at most.adv / thereabouts.adv / minimum.n / odd.a / much.art / nearly.adv / in neighborhood (of).prep / circa.prep",
        "definition": "The Denoted_quantity is (generally) an imprecise characterization of the quantity of Individuals or a Mass, made with reference to a relatively easily and precisely imaginable Reference_quantity.  'It took about three hours, but we 're done now.' 'But there were barely 300 in the whole district. DNI' 'Put in right around a pinch and a half. DNI ' 'She waited a good second before knocking.' 'She waited a good second before knocking.'",
        "tfidf": 1.3058024674927307,
        "frame": "Proportional_quantity"
    },
    {
        "lexical_unit": "visit.n / arrival.n / approach.v / reach.v / come.v / entry.n / get.v / arrive.v / return.n / descend (on).v / influx.n / return.v / approach.n / make.v / visit.v / enter.v / find.v / crest.v / entrance.n / appear.v / hit.v / make it.v",
        "definition": "An object Theme moves in the direction of a Goal. The Goal may be expressed or it may be understood from context, but its is always implied by the verb itself. '' 'Some students arrived at the school on Sunday.'  'It was his arrival at Nijmegen in 837 that made the Vikings withdraw.' ",
        "tfidf": 1.3040344977307654,
        "frame": "Arriving"
    }
];