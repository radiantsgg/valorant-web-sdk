/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface MapDto {
  /** @example Ascent */
  displayName: string;

  /** @example https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/displayicon.png */
  displayIcon: string;

  /** @example https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/listviewicon.png */
  listViewIcon: string;

  /** @example https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png */
  splash: string;
}

export interface MatchTeamDto {
  uuid: string;

  /**
   * The reference to the team on the Riot API
   * @example Red
   */
  teamReference: string;

  /** Whether the team won the match */
  won: boolean;

  /**
   * The number of rounds played
   * @example 22
   */
  roundsPlayed: number;

  /**
   * The number of rounds won
   * @example 13
   */
  roundsWon: number;
}

export interface AgentDto {
  /** @example Breach */
  displayName: string;

  /** @example https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png */
  displayIcon: string;

  /** @example https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayiconsmall.png */
  displayIconSmall: string;

  /** @example https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/bustportrait.png */
  bustPortrait: string;

  /** @example https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png */
  fullPortrait: string;

  /** @example https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/killfeedportrait.png */
  killfeedPortrait: string;

  /** @example Initiator */
  roleDisplayName: string;

  /** @example https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png */
  roleDisplayIcon: string;
}

export interface RankDto {
  tier: number;
  tierName: string;
  divisionName: string;
  color: string;
  backgroundColor: string;
  smallIcon: string;
  largeIcon: string;
  rankTriangleDownIcon: string;
  rankTriangleUpIcon: string;
}

export interface MatchPlayerStatsDto {
  /**
   * The player's total score
   * @example 7872
   */
  score: number;

  /**
   * The player's total rounds played
   * @example 24
   */
  roundsPlayed: number;

  /**
   * The player's total kills
   * @example 25
   */
  kills: number;

  /**
   * The player's total deaths
   * @example 17
   */
  deaths: number;

  /**
   * The player's total assists
   * @example 12
   */
  assists: number;

  /**
   * The player's total playtime
   * @example 2301667
   */
  playtime: number;

  /**
   * The player's total grenade casts
   * @example 10
   */
  grenadeCasts: number;

  /**
   * The player's total ability1 casts
   * @example 33
   */
  ability1Casts: number;

  /**
   * The player's total ability2 casts
   * @example 33
   */
  ability2Casts: number;

  /**
   * The player's total ultimate casts
   * @example 4
   */
  ability3Casts: number;
  damage: number;
  averageDamage: number;
  combatScore: number;
  economyRating: number;
  firstBloods: number;
  plants: number;
  defuses: number;
  bodyshots: number;
  legshots: number;
  headshots: number;
  secondaryFireModeKills: number;
  abilityKills: number;
  totalMoneySpent: number;
  averageMoneySpent: number;
  totalLoadoutValue: number;
  averageLoadoutValue: number;
}

export interface MatchPlayerDto {
  /**
   * Reference to the Riot account
   * @example d1237ce5-5a1e-494f-9020-7650f13a5973
   */
  uuid: string;

  /** Agent object provided by valorant-api.com */
  agent: AgentDto;

  /**
   * Player's in-game handle
   * @example 100T Hiko
   */
  riotGameName: string;

  /**
   * Player's in-game tag
   * @example 000
   */
  riotTagLine: string;

  /** The reference to the team */
  teamUuid: string;

  /**
   * The reference to the team on the Riot API
   * @example Red
   */
  teamReference: string;

  /** The reference to the player's rank at time of match start */
  rank: RankDto;

  /**
   * The reference to the player's party
   * @example 86e07f6d-e9bb-43ad-8775-eadfcbd90727
   */
  partyReference: string;

  /**
   * The reference to the player's 'player card'
   * @example c2f90c55-49be-93a5-daf4-6393d9d3f6fc
   */
  playerCardReference: string;

  /**
   * The reference to the player's title
   * @example 224f0e96-475d-165d-3ca6-8481a4cb7629
   */
  playerTitleReference: string;

  /** If player data is currently syncing with Riot API */
  isUpdating: boolean;

  /**
   * Last date player was updated from Riot API
   * @format date-time
   */
  updatedAt: string;

  /** Has the player authenticated with Radiants.gg */
  isVerifed: boolean;

  /** The players stats for the match */
  stats: MatchPlayerStatsDto;
}

export interface MatchListDto {
  uuid: string;

  /**
   * The length of the match in seconds
   * @example 2301667
   */
  gameLength: number;

  /**
   * The start date and time of the match
   * @format date-time
   * @example 2021-07-14 15:54:38.037
   */
  gameStart: string;

  /** Whether the match is completed */
  isCompleted: boolean;

  /** Whether the match is ranked/comptitive */
  isRanked: boolean;

  /**
   * The name set for custom created matches
   * @example 100T Scrim
   */
  customGameName?: string;

  /** Map object provided by valorant-api.com */
  map: MapDto;

  /**
   * The reference to the mode on the Riot API
   * @example /Game/GameModes/Bomb/BombGameMode.BombGameMode_C
   */
  modeReference: string;

  /**
   * The match-making queue used
   * @example COMPETITIVE
   */
  queue: "COMPETITIVE" | "UNRATED" | "SPIKERUSH" | "DEATHMATCH" | "SNOWBALL" | "ONEFA" | "CUSTOM";

  /**
   * The season of the match
   * @example 2a27e5d2-4d30-c9e2-b15a-93b8909a442c
   */
  season: string;
  teams: MatchTeamDto[];
  players: MatchPlayerDto[];

  /** The team of the player requested in the query */
  team?: MatchTeamDto;

  /** Player requested in the query */
  player?: MatchPlayerDto;
}

export interface MatchPlayerLocationDto {
  /**
   * Player horizontal map coordiante
   * @example 3139
   */
  locationX: number;

  /**
   * Player vertical map coordinate
   * @example -1529
   */
  locationY: number;

  /**
   * Player orientation
   * @example 1.52
   */
  viewRadians: number;
  playerUuid: string;
}

export interface MatchPlayerRoundStatsDto {
  playerUuid: string;

  /**
   * The player's score for round
   * @example 230
   */
  score: number;

  /**
   * The player's loadout value for round
   * @example 400
   */
  loadoutValue: number;

  /**
   * The player's weapon for round
   * @example 29A0CFAB-485B-F5D5-779A-B59F85E204A8
   */
  weaponReference: string;

  /**
   * The player's armor for round
   * @example 4DEC83D5-4902-9AB3-BED6-A7A390761157
   */
  armorReference: string;

  /**
   * The player's remaining money after buy period
   * @example 350
   */
  moneyRemaining: number;

  /**
   * The player's spent money for round
   * @example 800
   */
  moneySpent: number;

  /**
   * The player's grenade casts for round
   * @example 1
   */
  grenadeCasts: number;

  /**
   * The player's ability 1 cast for round
   * @example 2
   */
  ability1Casts: number;

  /**
   * The player's ability 2 cast for round
   * @example 1
   */
  ability2Casts: number;

  /**
   * The player's ultimate cast for round
   * @example 0
   */
  ability3Casts: number;

  /** Has the player planted in round */
  planted: boolean;

  /** Has the player defused in round */
  defused: boolean;

  /**
   * The player's combat score for round
   * @example 291
   */
  combatScore: number;

  /** Has the player achieved first kill in round */
  firstBlood: boolean;
}

export interface MatchKillDto {
  /**
   * The time since the game started in milliseconds.
   * @example 78906
   */
  gameTime: number;

  /**
   * The time since the round started in milliseconds.
   * @example 23874
   */
  roundTime: number;
  killerUuid: string;
  victimUuid: string;

  /**
   * Killer horizontal map coordinate
   * @example 5860
   */
  victimLocationX: number;

  /**
   * Killer vertical map coordinate
   * @example -8995
   */
  victimLocationY: number;

  /**
   * List of player uuids that assisted in the kill
   * @example ["c9d8b9c4-f9f8-4c4c-b8e6-e2f9b1e8c5d1","c9d8b9c4-f9f8-4c4c-b8e6-e2f9b1e8c5d2"]
   */
  assistants: string[];
  playerLocations: MatchPlayerLocationDto[];

  /**
   * The finishing damage type
   * @example Weapon
   */
  finishingDamageType: string;

  /**
   * The finishing damage item
   * @example 1BAA85B4-4C70-1284-64BB-6481DFC3BB4E
   */
  finishingDamageItem: string;

  /** The finishing damage was weapon secondary fire mode */
  isSecondaryFireMode: boolean;
}

export interface MatchDamageDto {
  /** The amount of damage given */
  damage: number;

  /**
   * The player who received the damage
   * @example 135
   */
  receiverUuid: string;

  /**
   * The amount of hits to legs
   * @example 0
   */
  legshots: number;

  /**
   * The amount of hits to body
   * @example 1
   */
  bodyshots: number;

  /**
   * The amount of hits to head
   * @example 1
   */
  headshots: number;
}

export interface MatchRoundDto {
  uuid: string;

  /**
   * Round number
   * @example 23
   */
  round: number;

  /**
   * Round result
   * @example Eliminated
   */
  result: string;

  /**
   * Round result code
   * @example Elimination
   */
  resultCode: string;

  /**
   * Round ceremony
   * @example CeremonyDefault
   */
  ceremony: string;

  /** Winning team */
  winningTeam: string;

  /** Bomb planter */
  bombPlanter: string;

  /** Bomb defuser */
  bombDefuser: string;

  /**
   * Plant round time
   * @example 21365
   */
  plantTime: number;

  /**
   * Plant horizontal map coordinate
   * @example 6697
   */
  plantLocationX: number;

  /**
   * Plant vertical map coordinate
   * @example -9296
   */
  plantLocationY: number;
  plantPlayerLocations: MatchPlayerLocationDto[];

  /**
   * Plant site
   * @example A
   */
  plantSite: string;

  /**
   * Defuse round time
   * @example 53229
   */
  defuseTime: number;

  /**
   * Defuse location X coordinate
   * @example 6697
   */
  defuseLocationX: number;

  /**
   * Defuse location Y coordinate
   * @example -9296
   */
  defuseLocationY: number;

  /**
   * Defuse site
   * @example A
   */
  defuseSite: string;
  defusePlayerLocations: MatchPlayerLocationDto[];
  playerRoundStats: MatchPlayerRoundStatsDto[];
  kills: MatchKillDto[];
  damage: MatchDamageDto[];
}

export interface MatchDto {
  uuid: string;

  /**
   * The length of the match in seconds
   * @example 2301667
   */
  gameLength: number;

  /**
   * The start date and time of the match
   * @format date-time
   * @example 2021-07-14 15:54:38.037
   */
  gameStart: string;

  /** Whether the match is completed */
  isCompleted: boolean;

  /** Whether the match is ranked/comptitive */
  isRanked: boolean;

  /**
   * The name set for custom created matches
   * @example 100T Scrim
   */
  customGameName?: string;

  /** Map object provided by valorant-api.com */
  map: MapDto;

  /**
   * The reference to the mode on the Riot API
   * @example /Game/GameModes/Bomb/BombGameMode.BombGameMode_C
   */
  modeReference: string;

  /**
   * The match-making queue used
   * @example COMPETITIVE
   */
  queue: "COMPETITIVE" | "UNRATED" | "SPIKERUSH" | "DEATHMATCH" | "SNOWBALL" | "ONEFA" | "CUSTOM";

  /**
   * The season of the match
   * @example 2a27e5d2-4d30-c9e2-b15a-93b8909a442c
   */
  season: string;
  teams: MatchTeamDto[];
  players: MatchPlayerDto[];
  rounds: MatchRoundDto[];
}

export interface AccountDto {
  /** Unique identifier for the account */
  uuid: string;

  /** Player's in-game handle */
  riotGameName: string;

  /** Player's in-game tag */
  riotTagLine: string;

  /** Player's in-game handle and tag */
  riotGameNameAndTag: string;

  /** Is the player being synced with Riot API */
  isUpdating: boolean;

  /**
   * Last sync with Riot API
   * @format date-time
   */
  updatedAt: string;

  /** Rank derived from last competitive match */
  rank: RankDto;

  /** Has the player signed-in through Riot Sign On? */
  verifed: boolean;

  /** Region of the player */
  region: string;
}

export type HttpException = object;

export interface SeasonStatsTotalDto {
  rounds: number;
  wins: number;
  losses: number;
  matches: number;
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  playtime: number;
  grenadeCasts: number;
  ability1Casts: number;
  ability2Casts: number;
  ability3Casts: number;
  damage: number;
  combatScore: number;
  economyRating: number;
  firstBloods: number;
  plants: number;
  defuses: number;
  bodyshots: number;
  legshots: number;
  headshots: number;
  secondaryFireModeKills: number;
  abilityKills: number;
  moneySpent: number;
  loadoutValue: number;
}

export interface SeasonStatsRoundAveragesDto {
  wins: number;
  losses: number;
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  playtime: number;
  grenadeCasts: number;
  ability1Casts: number;
  ability2Casts: number;
  ability3Casts: number;
  damage: number;
  combatScore: number;
  firstBloods: number;
  plants: number;
  defuses: number;
  bodyshots: number;
  legshots: number;
  headshots: number;
  moneySpent: number;
  loadoutValue: number;
}

export interface SeasonStatsMatchAveragesDto {
  rounds: number;
  wins: number;
  losses: number;
  score: number;
  kills: number;
  deaths: number;
  assists: number;
  playtime: number;
  grenadeCasts: number;
  ability1Casts: number;
  ability2Casts: number;
  ability3Casts: number;
  damage: number;
  combatScore: number;
  economyRating: number;
  firstBloods: number;
  plants: number;
  defuses: number;
  bodyshots: number;
  legshots: number;
  headshots: number;
  moneySpent: number;
  loadoutValue: number;
}

export interface SeasonStatsDto {
  total: SeasonStatsTotalDto;
  roundAverage: SeasonStatsRoundAveragesDto;
  matchAverage: SeasonStatsMatchAveragesDto;
  favoriteAgent: AgentDto;
}

export interface LeaderDto {
  uuid: string;
  riotGameName: string;
  riotTagLine: string;
  riotGameNameAndTag: string;
  matches: number;
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
  combatScore: number;
  economyRating: number;
  firstBloods: number;
  rank: RankDto;
  favoriteAgent: AgentDto;
  region: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://valorant.api.radiants.gg/",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Valorant API
 * @version 1.0.0
 * @termsOfService https://radiants.gg/terms
 * @baseUrl https://valorant.api.radiants.gg/
 * @externalDocs https://developer.radiants.gg/docs/valorant-api/
 * @contact Engineering Support <engineering@radiants.gg> (https://radiants.gg/contact)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * No description
     *
     * @tags Match
     * @name GetMatches
     * @summary Retrieve matches
     * @request GET:/v1/match
     */
    getMatches: (
      query?: {
        queue?: "COMPETITIVE" | "UNRATED" | "SPIKERUSH" | "DEATHMATCH" | "SNOWBALL" | "ONEFA" | "CUSTOM";
        player?: string;
        take?: number;
        skip?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<MatchListDto[], any>({
        path: `/v1/match`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Match
     * @name GetMatchByUuid
     * @summary Retrieve match by identifier
     * @request GET:/v1/match/{uuid}
     */
    getMatchByUuid: (uuid: string, params: RequestParams = {}) =>
      this.request<MatchDto, any>({
        path: `/v1/match/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetAccountByQuery
     * @summary Search for players by query string
     * @request GET:/v1/account
     */
    getAccountByQuery: (query: { q: string; skip?: number; take?: number }, params: RequestParams = {}) =>
      this.request<AccountDto[], any>({
        path: `/v1/account`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetAccountByUuid
     * @summary Retrieve a player by uuid
     * @request GET:/v1/account/{uuid}
     */
    getAccountByUuid: (uuid: string, params: RequestParams = {}) =>
      this.request<AccountDto, HttpException>({
        path: `/v1/account/${uuid}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name GetAccountByRiotGameName
     * @summary Retrieve a player by riot game name
     * @request GET:/v1/account/{riotGameName}/{riotTagLine}
     */
    getAccountByRiotGameName: (riotGameName: string, riotTagLine: string, params: RequestParams = {}) =>
      this.request<AccountDto, HttpException>({
        path: `/v1/account/${riotGameName}/${riotTagLine}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name UpdateAccountByUuid
     * @summary Force a refresh of player data from Riot API
     * @request PUT:/v1/account/trigger-update/{uuid}
     */
    updateAccountByUuid: (uuid: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/v1/account/trigger-update/${uuid}`,
        method: "PUT",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Stats
     * @name GetSeasonStatsByAccount
     * @summary Get season stats summary for account
     * @request GET:/v1/account/{uuid}/stats/{queue}/season/current
     */
    getSeasonStatsByAccount: (uuid: string, queue: string, params: RequestParams = {}) =>
      this.request<SeasonStatsDto, any>({
        path: `/v1/account/${uuid}/stats/${queue}/season/current`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Leaderboard
     * @name GetInternalLeaderboards
     * @summary Retrieve internal leaderboards for current season
     * @request GET:/v1/leaderboard
     */
    getInternalLeaderboards: (
      query: {
        queue?: "COMPETITIVE" | "UNRATED" | "SPIKERUSH" | "DEATHMATCH" | "SNOWBALL" | "ONEFA" | "CUSTOM";
        take?: number;
        skip?: number;
        type: "INTERNAL";
      },
      params: RequestParams = {},
    ) =>
      this.request<LeaderDto[], any>({
        path: `/v1/leaderboard`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}
